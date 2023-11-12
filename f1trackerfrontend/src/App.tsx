import React, { Component } from 'react';
import {Link, Outlet} from "react-router-dom";
import RecentResults from "./components/results/RecentResults";
import "./index.css";
import NavBar from "./components/navigate/NavBar";
class App extends Component<any, { infoOptions: any, selectedOption: any}> {
    render() {
        return (
                <div className={" w-full h-full flex flex-col justify-center items-center bg-f1-main"}>
                    <RecentResults/>
                    <Outlet />
                </div>
        );
    }
}

export default App;
