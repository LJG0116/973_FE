import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '@pages/HomePage';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/signup" exact component={HomePage} />
      <Route path="/signin" exact component={HomePage} />
      <Route path="/my" exact component={HomePage} />
      <Route path="/student" exact component={HomePage} />
      <Route path="/teacher" exact component={HomePage} />
      <Route path="/write" exact component={HomePage} />
      <Route path="/view/:id" exact component={HomePage} />
      <Route path="/edit/:id" exact component={HomePage} />
    </Switch>
  );
}

export default App;
