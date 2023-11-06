import React, { Component } from 'react';
import SelectPanel from "./SelectPanel";
import {Link} from "react-router-dom";
class SelectPanelPage extends Component<any, any> {
    render() {
        return (
            <div className={"w-full h-[1000px] flex flex-col items-center bg-f1-main"}>
                <div className={"text-6xl text-f1-white m-4 p-8 font-bold"}>F1 Tracker</div>
                <ul className={"flex flex-row justify-around items-center w-96 bg-amber-50 rounded-xl shadow-xl text-xl leading-8 p-6 m-4"}>
                    <li className={"text-2xl hover:text-f1-orange hover:scale-105 delay-50 ease-in-out"}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={" text-2xl hover:text-f1-orange hover:scale-105 delay-50 ease-in-out"}>
                        <Link to="/custominfo">Custom Info</Link>
                    </li>
                </ul>
                    <SelectPanel/>
            </div>
        );
    }
}

export default SelectPanelPage;
