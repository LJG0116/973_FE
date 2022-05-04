import axios from 'axios';
import { POST } from './axios';
// const { REACT_APP_END_POINT } = process.env;

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
