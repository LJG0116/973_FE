import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  HomePage,
  SigninPage,
  SignupPage,
  MyPage,
  PostWritePage,
  PostDetailPage,
} from '@pages';
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
        <Route path="/player" exact component={HomePage} />
        <Route path="/coach" exact component={HomePage} />
        <Route path="/club" exact component={HomePage} />
        <Route path="/write/player" exact component={PostWritePage} />
        <Route path="/write/coach" exact component={PostWritePage} />
        <Route path="/view" exact component={PostDetailPage} />
        <Route path="/edit/:id" exact component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
