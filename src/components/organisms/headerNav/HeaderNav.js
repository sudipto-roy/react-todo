import React from 'react';
import { NavLink } from 'react-router-dom';

class HeaderNav extends React.Component {
    render() {
        return (<nav>
            <NavLink to="/all-tasks">All Tasks</NavLink>
            <NavLink to="/done-tasks">Done Tasks</NavLink>
            <NavLink to="/pending-tasks">Pending Tasks</NavLink>
            <NavLink to="/add-task">Add Task</NavLink>
        </nav>);
    }
}

export default HeaderNav;