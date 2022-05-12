import { POST } from './axios';

export const postWritePost = async ({
  location,
  sport,
  text,
  title,
  userId,
}) => {
  const response = await POST({
    url: '/post/player',
    data: {
      area: location,
      author: userId,
      category: sport,
      text,
      title,
      userId,
    },
  });
  return response;
};
