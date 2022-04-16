import React from 'react';
import { LayoutColumn } from '@components/Layout';
import { Sidebar } from '@components/Bar';

const MyPage = (props) => {
  return (
    <LayoutColumn>
      <Sidebar />
    </LayoutColumn>
  );
};

export default MyPage;
