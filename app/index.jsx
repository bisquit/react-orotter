import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import DashboardTweets from './components/DashboardTweets';
import DashboardUsers from './components/DashboardUsers';

// Check if user had logged in, or transition to login page
function requireLogin(nextState, replace) {
  // User session storage for simplicity
  if (!window.sessionStorage.getItem('user')) {
    replace('/login');
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={Dashboard} onEnter={requireLogin}>
      <IndexRoute component={DashboardTweets} />
      <Route path="/search" component={DashboardUsers} />
    </Route>
    <Route path="/login" component={Login} />
  </Router>
  ),
  document.getElementById('app')
);
