import React, { Component } from 'react';

class TaskSix extends Component {
    handleDivClick = (event) => {
        console.log('Div clicked');
    }

    handleButtonClick = (event) => {
        event.stopPropagation();
        console.log('Button clicked');
    }

    render() {
        return (
        <div onClick={this.handleDivClick}>
            <button onClick={this.handleButtonClick}>Click me!</button>
        </div>
        );
    }
}

export default TaskSix;
