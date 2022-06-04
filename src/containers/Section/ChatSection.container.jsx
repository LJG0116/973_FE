import React, { useEffect, useState, useCallback } from 'react';
import { ChatSection } from '@components/Section';
import { getChat } from '@apis/chat';
import { useParams } from 'react-router-dom';
import SockJS from 'sockjs-client';
const { REACT_APP_END_POINT } = process.env;
const Stomp = require('stompjs');

let stomp;

const connection = () => {
  let sockJS = new SockJS(`${REACT_APP_END_POINT}/chat`);
  stomp = Stomp.over(sockJS);
};

const ChatSectionContainer = () => {
  const { senderId, receiverId } = useParams();
  const [message, setMessage] = useState('');
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    stomp.send(
      '/pub/chat/message',
      {},
      JSON.stringify({
        userId: values.senderId,
        roomId: values.chatRoomId,
        content: message,
      })
    );
    setValues({
      ...values,
      messages: [
        ...values.messages,
        {
          nickname: values.senderNickname,
          userId: values.senderId,
          roomId: values.chatRoomId,
          content: message,
          messageTime: `T${new Date().toTimeString()}`.split(' ')[0],
        },
      ],
    });
    setMessage('');
  };

  const init = useCallback(async () => {
    const { data } = await getChat({ senderId, receiverId });
    setValues({
      chatRoomId: data.chatRoomId,
      messages: data.messages,
      senderId: data.senderId,
      senderNickname: data.senderNickname,
    });
  }, [setValues, senderId, receiverId]);

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    connection();
    stomp.connect({}, () => {
      stomp.subscribe(`/sub/chat/room/${values.chatRoomId}`, (message) => {
        const newMessage = JSON.parse(message.body);
        setValues({
          ...values,
          messages: [...values.messages, newMessage],
        });
      });
    });
    return () => stomp.disconnect();
  }, [values, setValues]);

  return (
    <ChatSection
      values={values}
      message={message}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default ChatSectionContainer;
