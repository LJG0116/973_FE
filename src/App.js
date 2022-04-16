import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, SigninPage, SignupPage, MyPage } from '@pages';
import { Topbar } from '@components/Bar';

function App() {
  return (
    <>
      <Topbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/signin" exact component={SigninPage} />
        <Route path="/my" component={MyPage} />
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
