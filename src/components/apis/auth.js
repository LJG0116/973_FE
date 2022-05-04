import axios from 'axios';
const { REACT_APP_END_POINT } = process.env;

export const postSignin = async ({ email, password }) => {
  const response = await axios.post(`${REACT_APP_END_POINT}/user/login`, {
    email,
    password,
  });
  return response;
};

export const postSignup = async ({
  email,
  confirmPassword,
  nickname,
  password,
}) => {
  const response = await axios.post(`${REACT_APP_END_POINT}/user/join`, {
    email,
    password,
    confirmPassword,
    name: nickname,
  });
  return response;
};
