import React, { Component } from 'react';
import SelectPanel from "./components/select/SelectPanel";
import "./index.css";
class App extends Component<any, { infoOptions: any, selectedOption: any}> {

    render() {
        return (
            <div className={"flex flex-col justify-center items-center h-[100vh] w-full bg-amber-50"}>
                <div className={"text-5xl text-red-950 m-4 p-8"}>F1 Tracker</div>
                <SelectPanel
                    //onChange={this.handleSelectChange}
                    //options={this.state.infoOptions}
                    //value={this.state.selectedOption} // You can set the initial value here
                />
                <div></div>
            </div>
        );
    }
}

export default App;
