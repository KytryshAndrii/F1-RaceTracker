import React, { Component } from 'react';
import F1InfoAPI from "../../API/InfoAPI";
import SelectSceleton from "./SelectSceleton";
import Loader from "../loader/Loader";

interface SelectPanelInterface {
    infoOptions: any,
    selectedOption: any,

    constructorinfoOption: any,
    constructorselectedOption: any,

    yearinfoOption: any,
    yearselectedOption: any,

    ready: boolean
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

            ready:false
        };
    }

    async componentDidMount() {
        const options: F1InfoAPI = new F1InfoAPI();
        const infoOptions: any[] = await options.Drivers();
        const yearinfoOption : any[] = await options.YearsList();
        this.setState({ yearinfoOption});
        this.setState({ infoOptions });
        this.setState({ready: true})
    }

    async componentDidUpdate(nextProps: any, nextState: SelectPanelInterface) {
        const options: F1InfoAPI = new F1InfoAPI();
        if(this.state.selectedOption !== nextState.selectedOption) {
            this.setState({ready: false})
            const constructorinfoOption: any[] = await options.Constructor(this.state.selectedOption.value)
            this.setState({constructorinfoOption})
            this.setState({ready: true})
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
        return this.state.ready?(
            <div className={"flex flex-raw justify-center items-top h-[20%] w-[70%] p-10 mt-10 bg-f1-orange rounded-2xl shadow-lg shadow-f1-dark-orange"}>
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
        ): <Loader/>;
    }
}

export default SelectPanel;
