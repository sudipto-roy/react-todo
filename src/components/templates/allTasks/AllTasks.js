import React from 'react';

import { TodoList } from '../todoList';
import { withStore } from '../../../dataStore/DataStore';

class AllTasks extends React.Component {
    onChange = index => {
        const { store } = this.props;
        const { todoData } = store.getStoreState();
        todoData[index].done = !todoData[index].done;
        store.setStoreState({
          todoData: [...todoData]
        });
    };
    render() {
        let { store } = this.props;
        return <TodoList data={store.getStoreState().todoData} todoStateChange={this.onChange} showCheckbox={true} />;
    }
}

export default withStore(AllTasks);