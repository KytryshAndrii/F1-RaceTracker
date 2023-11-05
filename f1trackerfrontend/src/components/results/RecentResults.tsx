import React, { Component } from 'react';
import ResultsAPI from "../../API/ResultsAPI";
import Loader from "../loader/Loader";
interface RecentResultsInterface {
    recentinfo: any[],
    ready: any,
}

class RecentResults extends Component<any, RecentResultsInterface> {
    constructor(props: any) {
        super(props);
        this.state = {
            recentinfo: [],
            ready: false
        };
    }

    async componentDidMount() {
        const resultApi: ResultsAPI = new ResultsAPI()
        const recentinfo: any[] = await resultApi.Recent();
        this.setState({ recentinfo });
        setTimeout(()=>{
            const {recentinfo} = this.state
            var ready = true
            this.setState({ready})
            this.setState({recentinfo})
        }, 1000)
    }

    render() {
        console.log(this.state.recentinfo)
        return this.state.ready ? (
            <div className={"w-full h-full flex flex-col items-center p-10"}>
                <div className={"w-7/12 flex flex-col items-center justify-center bg-amber-50 rounded-xl shadow-xl text-lg leading-8 p-4 m-4"}>
                    <h1>🏁 Recent Results 🏁</h1>
                    <h1>{this.state.recentinfo[this.state.recentinfo.length - 1].location}</h1>
                    <h2>{this.state.recentinfo[this.state.recentinfo.length - 1].date}</h2>
                    <h2>{this.state.recentinfo[this.state.recentinfo.length - 1].time}</h2>
                    <h2>{this.state.recentinfo[this.state.recentinfo.length - 1].season}</h2>
                </div>
                <div className={"grid grid-cols-3"}>
                {this.state.recentinfo.slice(0, this.state.recentinfo.length -1).map((elem: any, key:number)=>(
                    <div key={key} className={"grid grid-rows-3 gap-2 w-84 bg-amber-50 rounded-xl shadow-xl text-xl leading-8 p-10 m-8"}>
                        <div>
                            🏎
                            <p>Position: {elem.position}</p>
                            <a href={elem.url} className={"underline decoration-dashed decoration-amber-950 decoration-2"}>Driver: {elem.driver}</a>
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

export default RecentResults;
