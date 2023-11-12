import React, { Component } from 'react';
import F1InfoAPI from "../../API/InfoAPI";
import SelectSceleton from "./SelectSceleton";
import Loader from "../loader/Loader";

interface SelectPanelInterface {
    infoOptions: any,
    constructorinfoOption: any,
    yearinfoOption: any,
    roundinfoOption: any,
    ready: boolean,
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
    buttonstate: string,
}

class SelectPanel extends Component<SelectPanelProps,SelectPanelInterface> {
    constructor(props: any) {
        super(props);
        this.state = {
            infoOptions: [],
            constructorinfoOption: [],
            yearinfoOption: [],
            roundinfoOption: [],
            ready:false,
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
            const roundinfoOption: any[] = await options.RoundsList(this.props.yearselectedOption.label)
            this.setState({roundinfoOption})
            this.setState({ready: true})
        }
    }


    render() {
        return this.state.ready?(
            <div className={"flex flex-raw justify-center items-top h-52 w-2/5 p-10 mt-10 bg-f1-orange rounded-2xl shadow-lg shadow-f1-dark-orange"}>
                {this.props.buttonstate === "year"?
                    <div className={"flex flex-col items-center justify-between"}>
                        <div className={"text-3xl text-f1-white font-bold"}>Year Driver</div>
                        <div className={"flex flex-row"}>
                            <SelectSceleton
                        onChange={this.props.handleSelectChange}
                        options={this.state.infoOptions}
                        value={this.props.selectedOption}
                        label={"Driver"}
                        />
                        <SelectSceleton
                        onChange={this.props.handleYearSelectChange}
                        options={this.state.yearinfoOption}
                        value={this.props.yearselectedOption}
                        label={"Year"}
                        />
                        </div>
                    </div>
                    :<></>}
                {this.props.buttonstate === "constructor"?
                    <div className={"flex flex-col items-center justify-between"}>
                        <div className={"text-3xl text-f1-white font-bold"}>Constructor Driver</div>
                        <div className={"flex flex-row"}>
                        <SelectSceleton
                            onChange={this.props.handleSelectChange}
                            options={this.state.infoOptions}
                            value={this.props.selectedOption}
                            label={"Driver"}
                        />
                        <SelectSceleton
                            onChange={this.props.handleConstruktorSelectChange}
                            options={this.state.constructorinfoOption}
                            value={this.props.constructorselectedOption}
                            label={"Constructor"}
                        />
                        </div>
                    </div>
                    :<></>}
                {this.props.buttonstate === "round"?
                    <div className={"flex flex-col items-center justify-between"}>
                        <div className={"text-3xl text-f1-white font-bold"}>Year Round</div>
                        <div className={"flex flex-row"}>
                        <SelectSceleton
                            onChange={this.props.handleYearSelectChange}
                            options={this.state.yearinfoOption}
                            value={this.props.yearselectedOption}
                            label={"Year"}
                        />
                        <SelectSceleton
                            onChange={this.props.handleRoundSelectChange}
                            options={this.state.roundinfoOption}
                            value={this.props.roundselectedOption}
                            label={"Round"}
                        /> </div>

                    </div>
                    :<></>}
                {this.props.buttonstate === "fastest"?
                    <div className={"flex flex-col items-center justify-between"}>
                        <div className={"text-3xl text-f1-white font-bold"}>Fastest Time</div>
                        <div className={"flex flex-row"}>
                        <SelectSceleton
                            onChange={this.props.handleYearSelectChange}
                            options={this.state.yearinfoOption}
                            value={this.props.yearselectedOption}
                            label={"Year"}
                        />
                        <SelectSceleton
                            onChange={this.props.handleRoundSelectChange}
                            options={this.state.roundinfoOption}
                            value={this.props.roundselectedOption}
                            label={"Round"}
                        />
                        </div>
                    </div>
                    :<></>}
            </div>
        ): <Loader/>;
    }
}

export default SelectPanel;
