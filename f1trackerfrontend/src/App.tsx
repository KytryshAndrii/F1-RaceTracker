import React, { Component } from 'react';
import {Link, Outlet} from "react-router-dom";
import RecentResults from "./components/results/RecentResults";
import "./index.css";
class App extends Component<any, { infoOptions: any, selectedOption: any}> {
    render() {
        return (
                <div className={"flex flex-col justify-center items-center h-full w-full bg-amber-100"}>
                    <div className={"text-5xl text-red-950 m-4 p-8"}>F1 Tracker</div>
                    <ul className={"flex flex-col justify-center items-center w-96 bg-amber-50 rounded-xl shadow-xl text-xl leading-8 p-6"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
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
