import React, { Component } from 'react';
import SelectPanel from "./SelectPanel";
import {Link} from "react-router-dom";
class SelectPanelPage extends Component<any, any> {
    render() {
        return (
            <div className={"w-full flex flex-col items-center  bg-amber-100"}>
                <div className={"text-5xl text-red-950 mt-4 p-8"}>F1 Tracker</div>
                <ul className={"flex flex-col justify-center items-center w-96 bg-amber-50 rounded-xl shadow-xl text-xl leading-8 p-6"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/custominfo">Custom Info</Link>
                    </li>
                </ul>
                    <SelectPanel/>
            </div>
        );
    }
}

export default SelectPanelPage;
