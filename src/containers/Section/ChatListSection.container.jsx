import React, { useEffect, useState, useCallback } from 'react';
import { ChatListSection } from '@components/Section';
import { getChats } from '@apis/chat';
import { useUsers } from '@contexts/UserProvider';

const ChatListSectionContainer = () => {
  const [values, setValues] = useState([]);
  const { user } = useUsers();

  const init = useCallback(async () => {
    const response = await getChats({ userId: user.userId });
    setValues(response.data);
  }, [user.userId]);

  useEffect(() => {
    init();
  }, [init]);

  return <ChatListSection values={values} />;
};

export default ChatListSectionContainer;
