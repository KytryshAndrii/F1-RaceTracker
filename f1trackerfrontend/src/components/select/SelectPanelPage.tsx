import React, { Component } from 'react';
import SelectPanel from "./SelectPanel";
import {Link} from "react-router-dom";
import YearRoundResults from "../results/YearRoundResults";
import F1InfoAPI from "../../API/InfoAPI";
import YearDriverResults from "../results/YearDriverResults";
import ConstructorDriverResults from "../results/ConstructorDriverResults";
import FastestResult from "../results/FastestResult";
export interface SelectPanelPageInterface{
    selectedOption: any,
    constructorselectedOption: any,
    yearselectedOption: any,
    roundselectedOption: any,
    ready: boolean
}

class SelectPanelPage extends Component<any, SelectPanelPageInterface> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedOption: null,
            constructorselectedOption: null,
            yearselectedOption: null,
            roundselectedOption: null,
            ready:false
        };
    }

    handleSelectChange = (selectedOption: any) => {
        this.setState({selectedOption})

    }
    handleConstruktorSelectChange = (selectedOption: any) => {
        this.setState({constructorselectedOption: selectedOption})

    }
    handleYearSelectChange = (selectedOption: any) => {
        this.setState({yearselectedOption: selectedOption})

    }
    handleRoundSelectChange = (selectedOption: any) => {
        this.setState({roundselectedOption: selectedOption})

    }

    render() {
        return (
            <div className={"w-full h-full flex flex-col items-center bg-f1-main"}>
                <div className={"text-6xl text-f1-white m-4 p-8 font-bold"}>F1 Tracker</div>
                <ul className={"flex flex-row justify-around items-center w-96 bg-amber-50 rounded-xl shadow-xl text-xl leading-8 p-6 m-4"}>
                    <li className={"text-2xl hover:text-f1-orange hover:scale-105 delay-50 ease-in-out"}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={" text-2xl hover:text-f1-orange hover:scale-105 delay-50 ease-in-out"}>
                        <Link to="/custominfo">Custom Info</Link>
                    </li>
                </ul>
                    <SelectPanel
                        handleSelectChange={this.handleSelectChange}
                        handleConstruktorSelectChange={this.handleConstruktorSelectChange}
                        handleRoundSelectChange={this.handleRoundSelectChange}
                        handleYearSelectChange={this.handleYearSelectChange}
                        selectedOption={this.state.selectedOption}
                        yearselectedOption={this.state.yearselectedOption}
                        constructorselectedOption={this.state.constructorselectedOption}
                        roundselectedOption={this.state.roundselectedOption}

                    />
                {this.state.yearselectedOption && this.state.roundselectedOption?<FastestResult
                    year={this.state.yearselectedOption.value}
                    round={this.state.roundselectedOption.value}/>:<p>Loading</p>}


            </div>
        );
    }
}

export default SelectPanelPage;
