import axios from 'axios';
import { getCookie, checkCookie } from '@/apis/token';

export const instance = axios.create({});
const { REACT_APP_API_END_POINT } = process.env;

export const GET = async ({
  url,
  params = {},
  isAuth = false,
  isJsonType = false,
}) => {
  instance.defaults.headers.common.Authorization = getCookie('Authorization');
  const headers = {
    ...(isJsonType && { 'Content-Type': 'application/json;charset=utf-8' }),
    Authorization: isAuth
      ? `Bearer ${instance.defaults.headers.common.Authorization}`
      : '',
  };

  try {
    const response = await axios({
      method: 'get',
      url: `${REACT_APP_API_END_POINT}${url}`,
      headers,
      params,
    });
    if (response.status >= 400) {
      throw new Error('API 호출에 실패 했습니다.');
    }
    return response.data;
  } catch (error) {
    return error;
  }
};

export const POST = async ({
  url,
  isAuth = false,
  data,
  params = {},
  isJsonType = false,
}) => {
  instance.defaults.headers.common.Authorization = getCookie('Authorization');
  const headers = {
    ...(isJsonType && { 'Content-Type': 'application/json;charset=utf-8' }),
    Authorization: isAuth
      ? `Bearer ${instance.defaults.headers.common.Authorization}`
      : '',
  };

  try {
    const response = await axios({
      method: 'post',
      url: `${REACT_APP_API_END_POINT}${url}`,
      headers,
      params,
      data,
    });

    if (response.status >= 400) {
      throw new Error('API 호출에 실패 했습니다.');
    }

    return response.data;
  } catch (error) {
    return error;
  }
};

export const PUT = async ({
  url,
  isAuth = false,
  data,
  params = {},
  isJsonType = false,
}) => {
  instance.defaults.headers.common.Authorization = getCookie('Authorization');
  const headers = {
    ...(isJsonType && { 'Content-Type': 'application/json;charset=utf-8' }),
    Authorization: isAuth
      ? `Bearer ${instance.defaults.headers.common.Authorization}`
      : '',
  };

  try {
    const response = await axios({
      method: 'put',
      url: `${REACT_APP_API_END_POINT}${url}`,
      headers,
      params,
      data,
    });
    if (response.status >= 400) {
      throw new Error('API 호출에 실패 했습니다.');
    }
    return response.data;
  } catch (error) {
    return error;
  }
};

export const DELETE = async ({
  url,
  isAuth = false,
  data,
  params = {},
  isJsonType = false,
}) => {
  if (!checkCookie('Authorization')) {
    return new Error('인증되지 않은 사용자입니다. 로그인 해주세요.');
  }

  instance.defaults.headers.common.Authorization = getCookie('Authorization');
  const headers = {
    ...(isJsonType && { 'Content-Type': 'application/json;charset=utf-8' }),
    Authorization: isAuth
      ? `Bearer ${instance.defaults.headers.common.Authorization}`
      : '',
  };

  try {
    const response = await axios({
      method: 'delete',
      url: `${REACT_APP_API_END_POINT}${url}`,
      headers,
      params,
      data,
    });
    if (response.status >= 400) {
      throw new Error('API 호출에 실패 했습니다.');
    }
    return response.data;
  } catch (error) {
    return error;
  }
};

export default { GET, POST, PUT, DELETE };