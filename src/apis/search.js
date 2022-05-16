import { DELETE, GET, POST, PUT } from './axios';

export const searchPost = async ({
  page = 1,
  location,
  sport,
  keyword,
  type = null,
}) => {
  const response = await GET({
    url: `/search/post/${page}`,
    data: {
      area: location?.join('#'),
      category: sport?.join('#'),
      keyword,
      type,
    },
  });
  console.log(response);
};
