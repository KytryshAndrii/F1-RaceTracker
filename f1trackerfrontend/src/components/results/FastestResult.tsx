import React, { Component } from 'react';
import ResultsAPI from "../../API/ResultsAPI";
import Loader from "../loader/Loader";
interface FastestResultsInterface {
    info: any[],
    ready: any,
    year: string,
    round: string,
    resultApi: ResultsAPI,
}

type FastestResultsProps = {
    year: string,
    round: string
};

class FastestResults extends Component<FastestResultsProps,  FastestResultsInterface> {
    constructor(props: any) {
        super(props);
        this.state = {
            info: [],
            ready: false,
            year: "",
            round:"",
            resultApi: new ResultsAPI()
        };
    }

    async componentDidMount() {
        const info: any[] = await this.state.resultApi.FastestResultsByYearandRound(this.props.year, this.props.round)
        this.setState({ info });
    }

    async componentDidUpdate(){
        const resultApi: ResultsAPI = new ResultsAPI()
        if(this.props.year != this.state.year || this.props.round != this.state.round){
            const info: any[] = await resultApi.FastestResultsByYearandRound(this.props.year, this.props.round)
            this.setState({ info });
            this.setState({ready: true})
            this.setState({year: this.props.year})
            this.setState({round: this.props.round})
        }
    }

    render() {
        return this.state.ready ? (
            <div className={"w-full h-fit flex flex-col items-center p-10 bg-f1-main"}>
                <div className={"w-7/12 flex flex-col items-center justify-center bg-f1-orange rounded-xl shadow-lg shadow-f1-dark-orange text-2xl font-bold text-f1-white leading-8 p-4 m-4"}>
                    <h1>🏁 Fastest Result 🏁</h1>
                </div>
                <div className={"w-7/12 grid grid-cols-1"}>
                    {this.state.info.map((elem: any, key:number)=>(
                        <div key={key} className={"grid grid-rows-4 grid-cols-1 gap-2 bg-amber-50 rounded-xl shadow-xl text-xl leading-8 p-10 m-8"}>
                            <div className={"w-full flex flex-col items-center justify-center bg-f1-orange rounded-xl shadow-lg shadow-f1-dark-orange  font-bold text-f1-white"}>
                                <p>{elem.location}</p>
                                <p>{elem.date}</p>
                                <p>{elem.time}</p>
                                <p>{elem.season}</p>
                            </div>
                            <div className={"w-full ml-40 p-4"}>
                                🏎
                                <p>Position: {elem.position}</p>
                                <a href={elem.url} target="_blank" className={"underline decoration-dashed decoration-amber-950 decoration-2"}>Driver: {elem.driver}</a>
                                <p>Construktor: {elem.constructor}</p>
                            </div>
                            <div className={"w-full ml-40 p-4"}>
                                📈
                                <p>Points: {elem.points}</p>
                                <p>Number:  {elem.number}</p>
                                <p>Status: {elem.status}</p>
                            </div>
                            <div className={"w-full ml-40 p-4"}>
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

export default FastestResults;
