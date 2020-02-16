import React from 'react';
import { BrowserRouter as Router, Route, Switch as RouteSwitch } from 'react-router-dom';

import './index.css';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import TaskPage from './pages/TaskPage';

const App = () => {
    return (
        <Router>
            <RouteSwitch>
                <Route exact={true} path='/'><HomePage /></Route>
                <Route exact={true} path='/404.html'><NotFoundPage /></Route>
                <Route
                    path='/:slug'
                    render={(props) => <TaskPage slug={props.match.params.slug as string} />}
                />
            </RouteSwitch>
        </Router>
    );
};

export default App;
