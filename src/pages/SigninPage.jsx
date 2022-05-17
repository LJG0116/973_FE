import React from 'react';
import { SigninFormContainer } from '@containers/Form';
import { LayoutColumnCenter } from '@components/Layout';

const SigninPage = (props) => {
  return (
    <LayoutColumnCenter>
      <SigninFormContainer />
    </LayoutColumnCenter>
  );
};

export default SigninPage;
