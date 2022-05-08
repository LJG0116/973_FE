import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUsers } from '@contexts/UserProvider';

const PublicRoute = ({ component: Component, from, to, ...props }) => {
  const { user } = useUsers();
  return (
    <Route
      {...props}
      render={(props) =>
        user || sessionStorage.getItem('authorization') ? (
          <Redirect
            to={{
              pathname: to,
              state: { from },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
