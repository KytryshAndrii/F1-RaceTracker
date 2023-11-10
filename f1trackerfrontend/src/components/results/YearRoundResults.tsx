import React, { Component } from 'react';
import ResultsAPI from "../../API/ResultsAPI";
import Loader from "../loader/Loader";
interface YearRoundResultsInterface {
    info: any[],
    ready: any,
    year: number,
    round: number
}

type YearRoundResultsProps = {
    year: number,
    round: number,
};

class YearRoundResults extends Component<YearRoundResultsProps,  YearRoundResultsInterface> {
    constructor(props: any) {
        super(props);
        this.state = {
            info: [],
            ready: false,
            year: 0,
            round: 0
        };
    }

    async componentDidMount() {
        const resultApi: ResultsAPI = new ResultsAPI()
        const info: any[] = await resultApi.ResultsByYearAndRound(this.props.year, this.props.round)
        this.setState({ info });
        this.setState({ready: true})

    }

    render() {
        console.log(this.state.info)
        return this.state.ready ? (
            <div className={"w-full h-full flex flex-col items-center p-10"}>
                <div className={"w-7/12 flex flex-col items-center justify-center bg-f1-orange rounded-xl shadow-lg shadow-f1-dark-orange text-2xl font-bold text-f1-white leading-8 p-4 m-4"}>
                    <h1>🏁 Results by Year and Round 🏁</h1>
                    <h1>{this.state.info[this.state.info.length - 1].location}</h1>
                    <h2>{this.state.info[this.state.info.length - 1].date}</h2>
                    <h2>{this.state.info[this.state.info.length - 1].time}</h2>
                    <h2>{this.state.info[this.state.info.length - 1].season}</h2>
                </div>
                <div className={"grid grid-cols-3"}>
                    {this.state.info.slice(0, this.state.info.length -1).map((elem: any, key:number)=>(
                        <div key={key} className={"grid grid-rows-3 gap-2 w-84 bg-amber-50 rounded-xl shadow-xl text-xl leading-8 p-10 m-8"}>
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

export default YearRoundResults;
