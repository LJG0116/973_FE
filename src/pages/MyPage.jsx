import React from 'react';
import { Layout } from '@components/Layout';
import { MyInfoEditFormContainer } from '@containers/Form';
import { MyPostSectionContainer } from '@containers/Section';

const MyPage = (props) => {
  return (
    <Layout>
      <MyInfoEditFormContainer />
      <MyPostSectionContainer />
    </Layout>
  );
};

export default MyPage;
