import React from 'react';
import { SignupFormContainer } from '@containers/Form';
import { Layout } from '@components/Layout';

const SignupPage = (props) => {
  return (
    <Layout>
      <SignupFormContainer />
    </Layout>
  );
};

export default SignupPage;
