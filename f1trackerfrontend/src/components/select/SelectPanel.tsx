import React, { Component } from 'react';
import F1InfoAPI from "../../API/InfoAPI";
import SelectSceleton from "./SelectSceleton";
class SelectPanel extends Component<any, { infoOptions: any, selectedOption: any}> {
    constructor(props: any) {
        super(props);
        this.state = {
            infoOptions: [],
            selectedOption: null
        };
    }

    async componentDidMount() {
        const options: F1InfoAPI = new F1InfoAPI();
        try {
            const infoOptions = await options.Drivers("http://localhost:8080/f1/info/drivers");
            this.setState({ infoOptions });
        } catch (error) {
            // Handle errors here
        }
    }

    handleSelectChange = (selectedOption: any) => {
        // Handle the selected option here
        console.log("Selected option:", selectedOption);
    }

    render() {
        return (
            <div className={"flex flex-raw justify-center items-center h-[50%] w-[70%] p-10 bg-orange-800"}>
                <SelectSceleton
                    onChange={this.handleSelectChange}
                    options={this.state.infoOptions}
                    value={this.state.selectedOption}
                />
                <SelectSceleton
                    onChange={this.handleSelectChange}
                    options={this.state.infoOptions}
                    value={this.state.selectedOption}
                />
                <SelectSceleton
                    onChange={this.handleSelectChange}
                    options={this.state.infoOptions}
                    value={this.state.selectedOption}
                />
                <div></div>
            </div>
        );
    }
}

export default SelectPanel;
