import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import NewPlaces from './places/pages/NewPlace';
import Users from './user/pages/Users';

const App = () => {
  return (
  <Router>
    <Switch>
      <Route path="/home" exact={true}>
        <Users />
      </Route>
      <Route path="/places/new" exact={true}>
        <NewPlaces />
      </Route>
      <Redirect to="/home" />
    </Switch>
  </Router>
  );
};

export default App;
