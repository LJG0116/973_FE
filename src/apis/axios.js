import axios from 'axios';
const { REACT_APP_END_POINT } = process.env;

axios.defaults.baseURL = REACT_APP_END_POINT;
axios.defaults.headers.common[
  'Authorization'
] = `Bearer ${sessionStorage.getItem('authorization')}`;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

export const GET = async ({ url, params = {}, data = {} }) => {
  try {
    const response = await axios({
      method: 'get',
      url,
      params,
      data,
    });

    // if (response.status >= 400) {
    //   throw new Error('API 호출에 실패 했습니다.');
    // }

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const POST = async ({ url, params = {}, data = {} }) => {
  try {
    const response = await axios({
      method: 'post',
      url,
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

export const PUT = async ({ url, params = {}, data = {} }) => {
  try {
    const response = await axios({
      method: 'put',
      url,
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

export const DELETE = async ({ url, params = {}, data = {} }) => {
  try {
    const response = await axios({
      method: 'delete',
      url,
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

//   const headers = {
//     ...(isJsonType && { 'Content-Type': 'application/json;charset=utf-8' }),
//     Authorization: isAuth
//       ? `Bearer ${instance.defaults.headers.common.Authorization}`
//       : '',
