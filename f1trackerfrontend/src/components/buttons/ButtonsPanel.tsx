import React, { Component } from 'react';
export interface ButtonsPanelInterface{
    ready: boolean
}

type ButtonPanelProps = {
    handleConstructorButtonClick: (selectedOption: any)=> void,
    handleYearButtonClick: (selectedOption: any)=> void,
    handleYearRoundButtonClick: (selectedOption: any)=> void,
    handleFastestButtonClick: (selectedOption: any)=> void,
}

class ButtonsPanel extends Component<ButtonPanelProps, ButtonsPanelInterface> {
    constructor(props: any) {
        super(props);
        this.state = {
            ready:false
        };
    }

    render() {
        return (
            <div className={"w-full -mt-24 p-4 h-16 grid-cols-4 gap-36 text-f1-white text-xl font-bold bg-stone-900 rounded-b-lg"}>
                <button className={"w-64 checked:bg-f1-white hover:bg-f1-white hover:text-stone-900 rounded-b-lg ease-in-out"} onClick={this.props.handleConstructorButtonClick}>
                    Constructor Driver</button>
                <button  className={"w-64 hover:bg-f1-white hover:text-stone-900 rounded-b-lg ease-in-out"} onClick={this.props.handleYearButtonClick}>
                    Year Driver</button>
                <button  className={"w-64 hover:bg-f1-white hover:text-stone-900 rounded-b-lg ease-in-out"} onClick={this.props.handleYearRoundButtonClick}>
                    Year Round</button>
                <button  className={"w-64 hover:bg-f1-white hover:text-stone-900 rounded-b-lg ease-in-out"} onClick={this.props.handleFastestButtonClick}>
                    Fastest Lap</button>
            </div>
        );
    }
}

export default ButtonsPanel;
