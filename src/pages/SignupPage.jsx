import React from 'react';
import { SignupFormContainer } from '@containers/Form';
import { LayoutColumnCenter } from '@components/Layout';

const SignupPage = (props) => {
  return (
    <LayoutColumnCenter>
      <SignupFormContainer />
    </LayoutColumnCenter>
  );
};

export default SignupPage;
