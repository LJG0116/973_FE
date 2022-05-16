import { GET, POST } from './axios';

export const postSignin = async ({ email, password }) => {
  const response = await POST({
    url: '/user/login',
    data: {
      email,
      password,
    },
  });
  return response;
};

export const postSignup = async ({
  email,
  confirmPassword,
  nickname,
  password,
}) => {
  const response = await POST({
    url: 'user/join',
    data: {
      email,
      password,
      confirmPassword,
      nickname,
    },
  });
  return response;
};

export const getCheckEmail = async ({ email }) => {
  const response = await GET({
    url: `/user/email/${email}`,
  });
  return response;
};

export const getCheckNickname = async ({ nickname }) => {
  const response = await GET({
    url: `/user/nickname/${nickname}`,
  });
  return response;
};
