import React, { Component } from 'react';
import F1InfoAPI from "../../API/InfoAPI";
import SelectSceleton from "./SelectSceleton";
import Loader from "../loader/Loader";

interface SelectPanelInterface {
    infoOptions: any,
    constructorinfoOption: any,
    yearinfoOption: any,
    roundinfoOption: any,
    ready: boolean
}

interface SelectPanelProps {
    handleSelectChange: (selectedOption: any)=> void,
    handleConstruktorSelectChange: (selectedOption: any)=> void,
    handleYearSelectChange: (selectedOption: any)=> void,
    handleRoundSelectChange: (selectedOption: any)=> void,
    yearselectedOption: any,
    selectedOption: any,
    constructorselectedOption: any,
    roundselectedOption: any,
}

class SelectPanel extends Component<SelectPanelProps,SelectPanelInterface> {
    constructor(props: any) {
        super(props);
        this.state = {
            infoOptions: [],
            constructorinfoOption: [],
            yearinfoOption: [],
            roundinfoOption: [],
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
        if(nextProps.selectedOption !== this.props.selectedOption) {
            this.setState({ready: false})
            const constructorinfoOption: any[] = await options.Constructor(this.props.selectedOption.value)
            this.setState({constructorinfoOption})
            this.setState({ready: true})
        }
        if(nextProps.yearselectedOption !== this.props.yearselectedOption){
            this.setState({ready: false})
            console.log("next", nextProps.yearselectedOption)
            console.log("props", this.props.yearselectedOption)
            const roundinfoOption: any[] = await options.RoundsList(this.props.yearselectedOption.label)
            this.setState({roundinfoOption})
            this.setState({ready: true})
        }
    }


    render() {
        return this.state.ready?(
            <div className={"flex flex-raw justify-center items-top h-[20%] w-[70%] p-10 mt-10 bg-f1-orange rounded-2xl shadow-lg shadow-f1-dark-orange"}>
                <SelectSceleton
                    onChange={this.props.handleSelectChange}
                    options={this.state.infoOptions}
                    value={this.props.selectedOption}
                />
                <SelectSceleton
                    onChange={this.props.handleConstruktorSelectChange}
                    options={this.state.constructorinfoOption}
                    value={this.props.constructorselectedOption}
                />
                <SelectSceleton
                    onChange={this.props.handleYearSelectChange}
                    options={this.state.yearinfoOption}
                    value={this.props.yearselectedOption}
                />
                <SelectSceleton
                    onChange={this.props.handleRoundSelectChange}
                    options={this.state.roundinfoOption}
                    value={this.props.roundselectedOption}
                />
            </div>
        ): <Loader/>;
    }
}

export default SelectPanel;
