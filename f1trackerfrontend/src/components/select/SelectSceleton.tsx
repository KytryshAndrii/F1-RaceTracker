import React, { Component } from 'react';
import Select from 'react-select';

interface SelectSceletonProps {
    onChange: (selectedOption: any) => void;
    options: any[];
    value: any;
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
            <div className={"p-4 m-4 w-64"}>
                <Select
                    value={this.props.value}
                    onChange={this.handleChange}
                    options={this.props.options}
                />
            </div>
        );
    }
}

export default SelectSceleton;