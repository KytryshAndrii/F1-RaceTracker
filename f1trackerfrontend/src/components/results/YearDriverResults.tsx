import React, { Component } from 'react';
import ResultsAPI from "../../API/ResultsAPI";
import Loader from "../loader/Loader";
interface YearDriverResultsInterface {
    info: any[],
    ready: any,
    year: number,
    driver: string,
    resultApi: ResultsAPI
}

type YearDriverResultsProps = {
    year: number,
    driver: string
};

class YearDriverResults extends Component<YearDriverResultsProps,  YearDriverResultsInterface> {
    constructor(props: any) {
        super(props);
        this.state = {
            info: [],
            ready: false,
            year: 0,
            driver:"",
            resultApi: new ResultsAPI()
        };
    }

    async componentDidMount() {
        const info: any[] = await this.state.resultApi.ResultsByYearAndDriver(this.props.year, this.props.driver)
        this.setState({ info });
    }
    async componentDidUpdate(){
        const resultApi: ResultsAPI = new ResultsAPI()
        if(this.props.year != this.state.year || this.props.driver != this.state.driver){
            const info: any[] = await resultApi.ResultsByYearAndDriver(this.props.year, this.props.driver)
            this.setState({ info });
            this.setState({ready: true})
            this.setState({year: this.props.year})
            this.setState({driver: this.props.driver})
        }
    }

    render() {
        return this.state.ready ? (
            <div className={"w-full h-fit flex flex-col items-center p-10 bg-f1-main"}>
                <div className={"w-7/12 flex flex-col items-center justify-center bg-f1-orange rounded-xl shadow-lg shadow-f1-dark-orange text-2xl font-bold text-f1-white leading-8 p-4 m-4"}>
                    <h1>🏁 Results By Driver and Year 🏁</h1>
                </div>
                <div className={"grid grid-cols-3"}>
                    {this.state.info.map((elem: any, key:number)=>(
                        <div key={key} className={"grid grid-rows-4 gap-2 w-84 bg-amber-50 rounded-xl shadow-xl text-xl leading-8 p-10 m-8"}>
                            <div className={"w-full flex flex-col items-center justify-center bg-f1-orange rounded-xl shadow-lg shadow-f1-dark-orange  font-bold text-f1-white"}>
                                <p>{elem.location}</p>
                                <p>{elem.date}</p>
                                <p>{elem.time}</p>
                                <p>{elem.season}</p>
                            </div>
                            <div>
                                🏎
                                <p>Position: {elem.position}</p>
                                <a href={elem.url} target="_blank" className={"underline decoration-dashed decoration-amber-950 decoration-2"}>Driver: {elem.driver}</a>
                                <p>Construktor: {elem.constructor}</p>
                            </div>
                            <div>
                                📈
                                <p>Points: {elem.points}</p>
                                <p>Number:  {elem.number}</p>
                                <p>Status: {elem.status}</p>
                            </div>
                            <div>
                                ⏱
                                <p>Average Speed: {elem.averspeed? elem.averspeed: "no info"}</p>
                                <p>Best Time:  {elem.fastesttime? elem.fastesttime: "no info"}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ): <Loader/>
    }
}

export default YearDriverResults;
