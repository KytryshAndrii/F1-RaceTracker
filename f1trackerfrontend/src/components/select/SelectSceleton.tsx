import React, { Component } from 'react';
import Select from 'react-select';

interface SelectSceletonProps {
    onChange: (selectedOption: any) => void;
    options: any[];
    value: any;
    label:string;
}

interface SelectSceletonState {
    selectedOption: any;
    infoOptions: any[];
}

class SelectSceleton extends Component<SelectSceletonProps, SelectSceletonState> {
    constructor(props: SelectSceletonProps) {
        super(props);
        this.state = {
            selectedOption: null,
            infoOptions: [],
        };
    }

    handleChange = (selectedOption: any) => {
        this.setState({ selectedOption }, () => {
            this.props.onChange(selectedOption); // Call the parent component's onChange function
        });
    };

    render() {
        return (
            <div className={"w-36 h-auto flex flex-col items-center text-f1-white font-bold text-xl p-4 m-4 w-64"}>
                {this.props.label}
                <div className={"text-stone-900 font-normal text-lg"}>
                    <Select
                        value={this.props.value}
                        onChange={this.handleChange}
                        options={this.props.options}
                    />
                </div>
            </div>
        );
    }
}

export default SelectSceleton;