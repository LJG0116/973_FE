import { DELETE, GET, POST, PUT } from './axios';

export const getChats = async ({ userId }) => {
  const response = await GET({
    url: '/chat/rooms',
    params: { userId },
  });
  return response;
};
