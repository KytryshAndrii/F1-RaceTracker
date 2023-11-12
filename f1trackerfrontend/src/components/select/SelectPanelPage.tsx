import React, { Component } from 'react';
import SelectPanel from "./SelectPanel";
import ButtonsPanel from "../buttons/ButtonsPanel";
import YearDriverResults from "../results/YearDriverResults";
import YearRoundResults from "../results/YearRoundResults";
import ConstructorDriverResults from "../results/ConstructorDriverResults";
import FastestResult from "../results/FastestResult";
export interface SelectPanelPageInterface{
    selectedOption: any,
    constructorselectedOption: any,
    yearselectedOption: any,
    roundselectedOption: any,
    buttonstate: string,
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
            buttonstate: "constructor",
            ready:false
        };
    }


    handleSelectChange = (selectedOption: any) => {
        this.setState({selectedOption})

    }
    handleConstruktorSelectChange = (selectedOption: any) => {
        console.log(selectedOption)
        this.setState({constructorselectedOption: selectedOption})

    }
    handleYearSelectChange = (selectedOption: any) => {
        this.setState({yearselectedOption: selectedOption})

    }
    handleRoundSelectChange = (selectedOption: any) => {
        this.setState({roundselectedOption: selectedOption})

    }

    handleConstructorButtonClick = () => {
        this.setState({buttonstate: "constructor"})
    }
    handleYearButtonClick = () => {
        this.setState({buttonstate: "year"})
    }
    handleYearRoundButtonClick = () => {
        this.setState({buttonstate: "round"})
    }
    handleFastestButtonClick = () => {
        this.setState({buttonstate: "fastest"})
    }

    render() {
        return (
            <div className={"w-full h-screen flex flex-col items-center bg-f1-main"}>
                    <ButtonsPanel
                        handleConstructorButtonClick={this.handleConstructorButtonClick}
                        handleYearButtonClick = {this.handleYearButtonClick}
                        handleYearRoundButtonClick = {this.handleYearRoundButtonClick}
                        handleFastestButtonClick = {this.handleFastestButtonClick}
                    />
                    <SelectPanel
                        handleSelectChange={this.handleSelectChange}
                        handleConstruktorSelectChange={this.handleConstruktorSelectChange}
                        handleRoundSelectChange={this.handleRoundSelectChange}
                        handleYearSelectChange={this.handleYearSelectChange}
                        selectedOption={this.state.selectedOption}
                        yearselectedOption={this.state.yearselectedOption}
                        constructorselectedOption={this.state.constructorselectedOption}
                        roundselectedOption={this.state.roundselectedOption}
                        buttonstate={this.state.buttonstate}

                    />
                {this.state.yearselectedOption && this.state.roundselectedOption && this.state.buttonstate ==="round"?<YearRoundResults
                    year={this.state.yearselectedOption.value}
                    round={this.state.roundselectedOption.value}/>:<></>}

                {this.state.yearselectedOption && this.state.selectedOption && this.state.buttonstate ==="year"?<YearDriverResults
                    year={this.state.yearselectedOption.value}
                    driver={this.state.selectedOption.value}/>:<></>}

                {this.state.constructorselectedOption && this.state.selectedOption && this.state.buttonstate ==="constructor"?<ConstructorDriverResults
                    constructor={this.state.constructorselectedOption.value}
                    driver={this.state.selectedOption.value}/>:<></>}

                {this.state.yearselectedOption && this.state.roundselectedOption && this.state.buttonstate ==="fastest"?<FastestResult
                    year={this.state.yearselectedOption.value}
                    round={this.state.roundselectedOption.value}/>:<></>}
            </div>
        );
    }
}

export default SelectPanelPage;
