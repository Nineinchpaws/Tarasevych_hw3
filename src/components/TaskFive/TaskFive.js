import React from 'react';

class TaskFive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list1: ['Item 1', 'Item 2', 'Item 3'],
            list2: ['Item A', 'Item B', 'Item C'],
        };
        this.moveItem = this.moveItem.bind(this);
    }

    moveItem() {
        const {list1, list2} = this.state;
        if (list1.length > 0) {
            const itemToMove = list1[0];
            this.setState({
                list1: list1.slice(1),
                list2: [...list2, itemToMove],
            });
        }
    }

    render() {
        const {list1, list2} = this.state;
        return (
            <div>
                <h2>List 1</h2>
                <ul>
                    {list1.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
                <h2>List 2</h2>
                <ul>
                    {list2.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
                <button onClick={this.moveItem}>Click to move item</button>
            </div>
        );
    }
}

export default TaskFive;
