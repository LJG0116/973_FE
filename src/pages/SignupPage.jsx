import React from 'react';
import { SignupFormContainer } from '@containers/Form';
import { LayoutColumn } from '@components/Layout';

const SignupPage = (props) => {
  return (
    <LayoutColumn>
      <SignupFormContainer />
    </LayoutColumn>
  );
};

export default SignupPage;
