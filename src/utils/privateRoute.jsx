import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUsers } from '@contexts/UserProvider';

const PrivateRoute = ({ component: Component, from, to, ...props }) => {
  const { user } = useUsers();
  return (
    <Route
      {...props}
      render={(props) =>
        user || sessionStorage.getItem('authorization') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: to,
              state: { from },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
