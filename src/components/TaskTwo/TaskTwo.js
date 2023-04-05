import React from "react";

function TaskTwo(props) {
    const names = [...new Set(props.names)];

    const listItems = names.map((name) => (
        <li key={name}>{name}</li>
    ));
    
    return (
        <ul>{listItems}</ul>
    );
}

export default TaskTwo;
