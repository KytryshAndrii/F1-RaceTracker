import React, { Component } from 'react';
import ResultsAPI from "../../API/ResultsAPI";
import Loader from "../loader/Loader";
interface ConstructorDriverResultsInterface {
    info: any[],
    ready: any,
    constructor: string,
    driver: string
}

type ConstructorDriverResultsProps = {
    constructor: string,
    driver: string
};

class ConstructorDriverResults extends Component<ConstructorDriverResultsProps,  ConstructorDriverResultsInterface> {
    constructor(props: any) {
        super(props);
        this.state = {
            info: [],
            ready: false,
            constructor: "",
            driver:""
        };
    }

    async componentDidMount() {
        const resultApi: ResultsAPI = new ResultsAPI()
        const info: any[] = await resultApi.ResultsByConstructorAndDriver(this.props.constructor, this.props.driver)
        info.reverse()
        this.setState({ info });
        this.setState({ready: true})

    }

    render() {
        return this.state.ready ? (
            <div className={"w-full h-full flex flex-col items-center p-10"}>
                <div className={"w-7/12 flex flex-col items-center justify-center bg-f1-orange rounded-xl shadow-lg shadow-f1-dark-orange text-2xl font-bold text-f1-white leading-8 p-4 m-4"}>
                    <h1>🏁 Results By Driver and Constructor 🏁</h1>
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

export default ConstructorDriverResults;
