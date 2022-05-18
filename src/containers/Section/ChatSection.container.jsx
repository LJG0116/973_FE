import React, { useEffect, useState, useCallback } from 'react';
import { ChatListSection } from '@components/Section';
import { getPlayerPosts } from '@apis/post';

const initialState = [
  {
    title: '',
    location: [],
    sport: [],
    text: '',
    userId: '',
  },
];

const ChatSectionContainer = () => {
  const [values, setValues] = useState(initialState);

  const init = useCallback(async () => {
    const response = await getPlayerPosts({ page: 1 });
    setValues(response.data);
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  return <ChatListSection values={values} />;
};

export default ChatSectionContainer;
