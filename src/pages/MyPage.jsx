import React from 'react';
import { LayoutColumn } from '@components/Layout';
import { MyInfoEditContainer } from '@containers/User';
import { Sidebar } from '@components/Bar';

const MyPage = (props) => {
  /*
  /my -> InfoContainter
  /my/post -> MyPostContainer
  /my/chat -> ChatContainer
  /my/edit -> MyInfoEditContainer
  */
  return (
    <LayoutColumn>
      <Sidebar />
      <MyInfoEditContainer />
    </LayoutColumn>
  );
};

export default MyPage;
