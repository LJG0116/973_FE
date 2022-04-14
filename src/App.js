import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import SigninPage from '@pages/SigninPage';
import SignupPage from '@pages/SignupPage';
import { Topbar } from '@components/Topbar';

function App() {
  return (
    <>
      <Topbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/signin" exact component={SigninPage} />
        <Route path="/my" exact component={HomePage} />
        <Route path="/student" exact component={HomePage} />
        <Route path="/teacher" exact component={HomePage} />
        <Route path="/club" exact component={HomePage} />
        <Route path="/write" exact component={HomePage} />
        <Route path="/view/:id" exact component={HomePage} />
        <Route path="/edit/:id" exact component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
