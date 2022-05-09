import axios from 'axios';
import { GET, POST } from './axios';

export const getCheckEmail = async ({ userId }) => {
  const response = await GET({
    url: '/user/email',
    data: {
      userId,
    },
  });
  return response;
};

export const getCheckNickname = async ({ nickname }) => {
  const response = await GET({
    url: '/user/email',
    data: {
      nickname,
    },
  });
  return response;
};

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
  const response = await axios.post('/user/join', {
    email,
    password,
    confirmPassword,
    name: nickname,
  });
  return response;
};
