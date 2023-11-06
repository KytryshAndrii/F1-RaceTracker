import React, { Component } from 'react';
import {Link, Outlet} from "react-router-dom";
import RecentResults from "./components/results/RecentResults";
import "./index.css";
class App extends Component<any, { infoOptions: any, selectedOption: any}> {
    render() {
        return (
                <div className={"flex flex-col justify-center items-center h-full w-full bg-f1-main"}>
                    <div className={"text-6xl text-f1-white m-4 p-8 font-bold"}>F1 Tracker</div>
                    <ul className={"flex flex-row justify-around items-center w-96 bg-amber-50 rounded-xl shadow-xl text-xl leading-8 p-6 m-4"}>
                        <li className={"text-2xl hover:text-f1-orange hover:scale-105 delay-50 ease-in-out"}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={" text-2xl hover:text-f1-orange hover:scale-105 delay-50 ease-in-out"}>
                            <Link to="/custominfo">Custom Info</Link>
                        </li>
                    </ul>
                    <RecentResults/>
                    <Outlet />
                </div>
        );
    }
}

export default App;
