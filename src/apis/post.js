import { DELETE, GET, POST, PUT } from './axios';

export const postWritePost = async ({
  location,
  sport,
  text,
  title,
  author,
}) => {
  const response = await POST({
    url: '/post/player',
    data: {
      area: location,
      author,
      category: sport,
      text,
      title,
    },
  });
  return response;
};

export const getPlayerPosts = async ({ page }) => {
  const response = await GET({
    url: `/post/player/${page}`,
  });
  return response;
};

export const getCoachPosts = async ({ page }) => {
  const response = await GET({
    url: '/post/coach/',
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
  nickname,
  postId,
}) => {
  const response = await PUT({
    url: '/post',
    data: {
      area: location,
      author: nickname,
      category: sport,
      postId,
      text,
      title,
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
