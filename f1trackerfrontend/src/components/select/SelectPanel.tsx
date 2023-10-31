import React, { Component } from 'react';
import F1InfoAPI from "../../API/InfoAPI";
import SelectSceleton from "./SelectSceleton";

interface SelectPanelInterface {
    infoOptions: any,
    selectedOption: any,

    constructorinfoOption: any,
    constructorselectedOption: any,

    yearinfoOption: any,
    yearselectedOption: any,
}

class SelectPanel extends Component<any,SelectPanelInterface> {
    constructor(props: any) {
        super(props);
        this.state = {
            infoOptions: [],
            selectedOption: null,

            constructorinfoOption: [],
            constructorselectedOption: null,

            yearinfoOption: [],
            yearselectedOption: null,
        };
    }

    async componentDidMount() {
        const options: F1InfoAPI = new F1InfoAPI();
        const infoOptions: any[] = await options.Drivers();
        const yearinfoOption : any[] = await options.YearsList();
        this.setState({ yearinfoOption});
        this.setState({ infoOptions });
    }

    async componentDidUpdate(nextProps: any, nextState: SelectPanelInterface) {
        const options: F1InfoAPI = new F1InfoAPI();
        if(this.state.selectedOption !== nextState.selectedOption) {
            const constructorinfoOption: any[] = await options.Constructor(this.state.selectedOption.value)
            this.setState({constructorinfoOption})
        }
    }

    handleConstruktorSelectChange = (constructorselectedOption: any) => {
        console.log("Selected option:", constructorselectedOption);
        this.setState({constructorselectedOption})
    }

    handleYearSelectChange = (yearselectedOption: any) => {
        console.log("Selected option:", yearselectedOption);
        this.setState({yearselectedOption})
    }

    handleSelectChange = (selectedOption: any) => {
        // Handle the selected option here
        console.log("Selected option:", selectedOption);
        this.setState({selectedOption})
    }

    render() {
        return (
            <div className={"flex flex-raw justify-center items-top h-[50%] w-[70%] p-10 bg-orange-800"}>
                <SelectSceleton
                    onChange={this.handleSelectChange}
                    options={this.state.infoOptions}
                    value={this.state.selectedOption}
                />
                <SelectSceleton
                    onChange={this.handleConstruktorSelectChange}
                    options={this.state.constructorinfoOption}
                    value={this.state.constructorselectedOption}
                />
                <SelectSceleton
                    onChange={this.handleYearSelectChange}
                    options={this.state.yearinfoOption}
                    value={this.state.yearselectedOption}
                />
            </div>
        );
    }
}

export default SelectPanel;
