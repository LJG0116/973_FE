import React from 'react';
import { LayoutRow } from '@components/Layout';
import { MyInfoEditFormContainer } from '@containers/Form';
import { Sidebar } from '@components/Bar';

const MyPage = (props) => {
  /*
  /my -> InfoContainter
  /my/post -> MyPostContainer
  /my/chat -> ChatContainer
  /my/edit -> MyInfoEditContainer
  */
  return (
    <LayoutRow>
      <Sidebar />
      <MyInfoEditFormContainer />
    </LayoutRow>
  );
};

export default MyPage;
