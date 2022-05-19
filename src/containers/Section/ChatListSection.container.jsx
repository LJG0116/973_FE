import React, { useEffect, useState, useCallback } from 'react';
import { ChatListSection } from '@components/Section';
import { getChats } from '@apis/chat';
import { useUsers } from '@contexts/UserProvider';

const initialState = [
  {
    title: '',
    location: [],
    sport: [],
    text: '',
    userId: '',
  },
];

const ChatListSectionContainer = () => {
  const [values, setValues] = useState(initialState);
  const { user } = useUsers();

  const init = useCallback(async () => {
    const response = await getChats({ userId: user.userId });
    // setValues(response.data);
    console.log(response);
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  return <ChatListSection values={values} />;
};

export default ChatListSectionContainer;
