import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import { AllTasks } from '../allTasks';
import { DoneTasks } from '../doneTasks';
import { PendingTasks } from '../pendingTasks';

import { DataProvider } from '../../../dataStore/DataStore';

const AddTask = Loadable({
    loader: () => import('../addTask/AddTask'),
    loading: () => <div>Loading...</div>
});

let todoData = [{
    id: 1,
    name: 'learn spanish',
    done: false
}, {
    id: 2,
    name: 'plan a trip',
    done: true
}];

let state = {
    todoData
}

class MainRoute extends React.Component {
    render() {
        return (<DataProvider state={state}>
            <Switch>
                <Route path="/all-tasks" component={AllTasks}/>
                <Route path="/done-tasks" component={DoneTasks}/>
                <Route path="/pending-tasks" component={PendingTasks}/>
                <Route path="/add-task" component={AddTask}/>
                <Route path="/" exact render={() => <Redirect to="/all-tasks" />}/>
            </Switch>
        </DataProvider>);
    }
}

export default MainRoute;