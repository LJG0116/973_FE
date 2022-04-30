import axios from 'axios';

export const postSignin = async ({ email, password }) => {
  const response = await axios.post('/user/login', {
    email,
    password,
  });
  return response;
};
