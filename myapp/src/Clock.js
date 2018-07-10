import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
    };   
    handleChange(event){
        this.setState({value: event.target.value});
    };
    render() {
        var value = this.state.value;
        return (
            <div>
                <input type="text" value={value} onChange={this.handleChange} />
            </div>
        )
    }
}

export default Clock