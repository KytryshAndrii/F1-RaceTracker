import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ButtonsPanel from "../buttons/ButtonsPanel";

interface NavBarInterface{
    resultsclikced: boolean
    resultnuttonstyle: string
}


class NavBar extends Component<any, NavBarInterface> {
    constructor(props: any) {
        super(props);
        this.state = {
            resultsclikced: false,
            resultnuttonstyle: "hover:h-10  hover:bg-stone-900 hover:rounded-xl hover:shadow-xl"
        };
    }

    handleRacentResultButtonClick = () => {
        this.setState({resultsclikced: false})
        this.setState({resultnuttonstyle: "hover:h-10  hover:bg-stone-900 hover:rounded-xl hover:shadow-xl"})
    }

    handleRaceResultButtonClick = () => {
        this.setState({resultsclikced: true})
        this.setState({resultnuttonstyle: "h-16 translate-y-4 bg-stone-900 rounded-t-xl shadow-xl"})
    }

    render() {
        return (
            <div className={"w-full grid grid-rows-2"}>
                <div className={"w-full h-24 flex flex-row items-center justify-around bg-f1-orange"}>
                    <div className={"text-5xl text-f1-white m-2 p-8 font-bold"}>F1 Tracker</div>
                    <ul className={"flex flex-row justify-around items-center w-96 font-bold text-xl leading-8 p-4 m-8"}>
                        <li className={"text-f1-white w-20 hover:h-10  hover:bg-stone-900 hover:rounded-xl hover:shadow-xl delay-70 ease-in-out"}>
                            <Link className={"ml-2"} onClick={this.handleRacentResultButtonClick} to="/">Home</Link>
                        </li>
                        <li className={`text-f1-white w-36 ${this.state.resultnuttonstyle} delay-70 ease-in-out`}>
                            <Link className={"ml-2"} onClick={this.handleRaceResultButtonClick} to="/custominfo">Race Results</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavBar;
