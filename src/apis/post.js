import { DELETE, GET, POST, PUT } from './axios';

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

export const getPost = async ({ id }) => {
  const response = await GET({
    url: `/post/${id}`,
  });
  return response;
};

export const postUpdatePost = async ({
  location,
  sport,
  text,
  title,
  userId,
}) => {
  const response = await PUT({
    url: '/post',
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

export const deletePost = async ({ id }) => {
  const response = await DELETE({
    url: `/post/${id}`,
  });
  return response;
};
