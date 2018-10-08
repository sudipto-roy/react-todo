import React from 'react';
import { Redirect } from 'react-router-dom';

import { withStore } from '../../../dataStore/DataStore';

class AddTask extends React.Component {
    handleAddTask = e => {
        e.preventDefault();
        const { store } = this.props;
        const { todoData } = store.getStoreState();
        todoData[todoData.length] = {
            id: todoData.length + 1,
            name: e.currentTarget['taskName'].value,
            done: false
        }
        store.setStoreState({
            todoData: [...todoData]
        }, () => {<Redirect to="/all-tasks" />});
    }
    render() {
        return <form onSubmit={this.handleAddTask}>
            <input id='taskName' type='text' placeholder='name of task' />
            <input type='submit' value='Add Task' />
        </form>;
    }
}

export default withStore(AddTask);