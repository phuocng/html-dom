import React from 'react';
import { BrowserRouter as Router, Route, Switch as RouteSwitch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import TaskPage from './pages/TaskPage';

const App = () => {
    return (
        <Router>
            <RouteSwitch>
                <Route exact={true} path='/'><HomePage /></Route>
                <Route
                    path='/:slug'
                    render={(props) => <TaskPage slug={props.match.params.slug as string} />}
                />
            </RouteSwitch>
        </Router>
    );
};

export default App;
