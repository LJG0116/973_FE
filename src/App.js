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
  PostSearchPage,
  ChatListPage,
  ChatPage,
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
        <PrivateRoute
          exact
          from="/chat/:senderId/:receiverId"
          component={ChatPage}
        />
        {/* <PrivateRoute exact from="/chat" component={ChatListPage} /> */}
        <Route exact from="/search" component={PostSearchPage} />
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
