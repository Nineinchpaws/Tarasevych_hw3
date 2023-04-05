import React from "react";

class TaskThree extends React.Component {
    state = {
        counter: 1
    };

    handleClick = (event) => {
        const operator = event.target.textContent;
        const value = operator === '+' ? 1 : -1;

        this.setState(prevState => ({
        counter: prevState.counter + value
        }));
    };

    render() {
        return (
        <div>
            <h2>{this.state.counter}</h2>
            <button onClick={this.handleClick}>+</button>
            <button onClick={this.handleClick}>-</button>
        </div>
        );
    }
}

export default TaskThree;
