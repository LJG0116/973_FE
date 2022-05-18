import React from 'react';
import { ChatListSectionContainer } from '@containers/Section';
import { LayoutColumn } from '@components/Layout';

const ChatPage = () => {
  return (
    <LayoutColumn>
      <ChatListSectionContainer />
    </LayoutColumn>
  );
};

export default ChatPage;
