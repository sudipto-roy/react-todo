import React from 'react';

import Checkbox from '../../atoms/checkbox/Checkbox';

class TodoItem extends React.Component {
    static Name = ({name}) => name;
    static Checkbox = ({checked, onChange}) => <Checkbox checked={checked} onChange={onChange} />;
    render() {
        return <div className={this.props.cssClass}>{this.props.children}</div>;
    }
}

export const TodoItemName = TodoItem.Name;
export const TodoItemCheckbox = TodoItem.Checkbox;
export default TodoItem;