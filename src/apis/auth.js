import { GET, POST, PUT } from './axios';

export const editMyInfo = async ({
  email,
  id,
  intro,
  nickname,
  profileImageFile,
}) => {
  // const formData = new FormData();
  // formData.append('profileImage', profileImageFile);
  // formData.append('request', jsonBlob(request));

  const response = await PUT({
    url: '/myPage/info',
    headers: { 'Content-Type': 'multipart/form-data' },
    params: {
      email,
      id,
      intro,
      nickname,
    },
    data: {
      profileImage: profileImageFile,
    },
  });
  return response;
};

export const getMyInfo = async ({ id }) => {
  const response = await GET({
    url: `/myPage/info/${id}`,
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
