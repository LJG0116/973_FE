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

    return response.data;
  } catch (error) {
    alert(error.response.data.message);
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

    return response.data;
  } catch (error) {
    alert(error.response.data.message);
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

    return response.data;
  } catch (error) {
    alert(error.response.data.message);
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

    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};
