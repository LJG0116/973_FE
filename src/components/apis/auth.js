import axios from 'axios';

export const postSignin = async ({ email, password }) => {
  const response = await axios.post('http://3.39.40.188:8080/user/login', {
    email,
    password,
  });
  return response;
};
