import React from 'react';
import { ChatListSectionContainer } from '@containers/Section';
import { LayoutColumn } from '@components/Layout';

const ChatListPage = () => {
  return (
    <LayoutColumn>
      <ChatListSectionContainer />
    </LayoutColumn>
  );
};

export default ChatListPage;
