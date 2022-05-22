import React, { useEffect, useState, useCallback } from 'react';
import { ChatSection } from '@components/Section';
import { getChat } from '@apis/chat';
import { useParams } from 'react-router-dom';
import { useForm } from '@hooks';
import SockJS from 'sockjs-client';
const Stomp = require('stompjs');

let stomp;

const connection = () => {
  let sockJS = new SockJS('http://3.39.40.188/chat');
  stomp = Stomp.over(sockJS);
};

const initialState = {
  message: '',
  chatRoomId: '',
  messages: [],
  senderId: 0,
  senderNickname: 0,
};

const ChatSectionContainer = () => {
  const { values, setValues, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit: (values) => {
      stomp.send(
        '/pub/chat/message',
        {},
        JSON.stringify({
          userId: values.senderId,
          roomId: values.chatRoomId,
          content: values.message,
        })
      );
      setValues({
        ...values,
        message: 'ㅗ로롤',
        messages: [
          ...values.messages,
          {
            userId: values.senderId,
            roomId: values.chatRoomId,
            content: values.message,
          },
        ],
      });
    },
    validate: ({ message }) => {
      if (message) return;
      return { message: '메세지를 입력해주세요.' };
    },
  });
  const { senderId, receiverId } = useParams();

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
    connection();
    stomp.connect({}, () => {
      stomp.subscribe('/sub/chat/room/' + 1, (message) => {
        const newMessage = JSON.parse(message.body);
        setValues({
          ...values,
          messages: [...values.messages, newMessage],
        });
      });
    });
  }, [values, setValues]);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <ChatSection
      values={values}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default ChatSectionContainer;
