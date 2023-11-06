import React, { Component } from 'react';
class Loader extends Component<any,any> {
    render() {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className={"w-20 h-20 border-4 border-f1-orange border-t-0 rounded-full animate-spin"}></div>
            </div>
        );
    }
}

export default Loader;
