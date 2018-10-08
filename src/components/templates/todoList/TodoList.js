import React from 'react';

import TodoItem, { TodoItemName, TodoItemCheckbox } from '../../organisms/todoItem/TodoItem';

class TodoList extends React.Component {
    render() {
        let { data, todoStateChange, showCheckbox } = this.props;
        return <ul>{
            data.map((el, i) => <li key={el.id}>
                <TodoItem cssClass={el.done ? 'done' : 'incomplete'}>
                <TodoItemName name={el.name} />
                {showCheckbox ? <TodoItemCheckbox checked={el.done} onChange={() => todoStateChange(i)} /> : ''}
                </TodoItem>
            </li>)}
        </ul>;
    }
}

export default TodoList;