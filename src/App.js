import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserProvider from '@contexts/UserProvider';
import {
  HomePage,
  SigninPage,
  SignupPage,
  MyPage,
  PostWritePage,
  PostDetailPage,
} from '@pages';
import { Topbar } from '@components/Bar';
import PrivateRoute from '@utils/privateRoute';
import PublicRoute from '@utils/publicRoute';

function App() {
  return (
    <UserProvider>
      <Topbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <PublicRoute exact from="/signup" to="/my" component={SignupPage} />
        <PublicRoute exact from="/signin" to="/my" component={SigninPage} />
        <PrivateRoute exact from="/my" component={MyPage} />
        <Route path="/player" exact component={HomePage} />
        <Route path="/coach" exact component={HomePage} />
        <Route path="/club" exact component={HomePage} />
        <PrivateRoute exact from="/write/player" component={PostWritePage} />
        <PrivateRoute exact from="/write/coach" component={PostWritePage} />
        <Route path="/view" exact component={PostDetailPage} />
        <PrivateRoute exact from="/edit/:id" component={HomePage} />
      </Switch>
    </UserProvider>
  );
}

export default App;
