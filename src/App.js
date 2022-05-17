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
  PostEditPage,
  PostPlayerPage,
  PostCoachPage,
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
        <Route path="/player" exact component={PostPlayerPage} />
        <Route path="/coach" exact component={PostCoachPage} />
        <PrivateRoute exact from="/write/:type" component={PostWritePage} />
        <Route path="/view/:id" exact component={PostDetailPage} />
        <PrivateRoute exact from="/edit/:id" component={PostEditPage} />
      </Switch>
    </UserProvider>
  );
}

export default App;
