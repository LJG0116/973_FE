import { GET } from './axios';

export const getChats = async ({ userId }) => {
  const response = await GET({
    url: '/chat/rooms',
    params: { userId },
  });
  return response;
};

export const getChat = async ({ senderId, receiverId }) => {
  const response = await GET({
    url: '/chat/enter',
    params: { senderId, receiverId },
  });
  return response;
};

export const getRoomChat = async ({ senderId, chatRoomId }) => {
  const response = await GET({
    url: '/chat/room',
    params: { userId: senderId, roomId: chatRoomId },
  });
  return response;
};
