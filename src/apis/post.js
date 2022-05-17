import { DELETE, GET, POST, PUT } from './axios';

export const writePost = async ({
  location,
  sport,
  text,
  title,
  nickname,
  userId,
  type,
}) => {
  console.log(type);
  const response =
    type === 'player'
      ? await POST({
          url: '/post/player',
          data: {
            area: location.join('#'),
            nickname,
            category: sport.join('#'),
            text,
            title,
            userId,
          },
        })
      : await POST({
          url: '/post/coach',
          data: {
            area: location.join('#'),
            nickname,
            category: sport.join('#'),
            text,
            title,
            userId,
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
    url: `/post/coach/${page}`,
  });
  return response;
};

export const getPost = async ({ id }) => {
  const response = await GET({
    url: `/post/${id}`,
  });
  return response;
};

export const updatePost = async ({
  location,
  sport,
  text,
  title,
  id,
  nickname,
  userId,
}) => {
  const response = await PUT({
    url: '/post',
    data: {
      area: location.join('#'),
      nickname,
      category: sport.join('#'),
      postId: id,
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
