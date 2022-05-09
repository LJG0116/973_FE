import React from 'react';
import { Banner } from '@components/Banner';
import { Layout } from '@components/Layout';
import { InputSearch } from '@components/Input';

const HomePage = (props) => {
  return (
    <Layout>
      <Banner />
      <InputSearch />
    </Layout>
  );
};

export default HomePage;
