import React from 'react';
import { SigninFormContainer } from '@containers/Form';
import { LayoutColumn } from '@components/Layout';

const SigninPage = (props) => {
  return (
    <LayoutColumn>
      <SigninFormContainer />
    </LayoutColumn>
  );
};

export default SigninPage;
