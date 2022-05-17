import { GET } from './axios';

export const searchPost = async ({
  page = 1,
  location,
  sport,
  keyword,
  type = null,
}) => {
  const response = await GET({
    url: `/search/post/${page}`,
    params: {
      area: location?.join('#'),
      category: sport?.join('#'),
      keyword,
      type,
    },
  });
  return response;
};
