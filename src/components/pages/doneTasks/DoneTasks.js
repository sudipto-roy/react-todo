import React from 'react';

import { TodoList } from '../../templates/todoList';
import { withStore } from '../../../dataStore/DataStore';

class DoneTasks extends React.Component {
    render() {
        let { store } = this.props;
        return <TodoList data={store.getStoreState().todoData.filter(el => el.done)} todoStateChange={this.onChange} />;
    }
}

export default withStore(DoneTasks);