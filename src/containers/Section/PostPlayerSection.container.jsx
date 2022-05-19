import React, { useEffect, useState, useCallback } from 'react';
import { PostPlayerSection } from '@components/Section';
import { getPlayerPosts } from '@apis/post';
import { Paginationbar } from '@components/Bar';

const initialState = [
  {
    title: '',
    location: [],
    sport: [],
    text: '',
    userId: '',
  },
];

const PostPlayerSectionContainer = () => {
  const [values, setValues] = useState(initialState);
  const [page, setPage] = useState(1);

  const init = useCallback(async () => {
    const response = await getPlayerPosts({ page: 1 });
    setValues(response.data);
  }, []);

  const handleClick = async (e) => {
    const { id, value } = e.target;

    console.log(page);

    if (value) {
      const response = await getPlayerPosts({ page: value });
      setValues(response.data);
      return;
    }

    id === 'prev' ? setPage(page > 5 ? page - 5 : 1) : setPage(page + 5);
  };

  useEffect(() => {
    init();
  }, [init]);

  return (
    <>
      <PostPlayerSection values={values} />
      <Paginationbar page={page} onClick={handleClick} />
    </>
  );
};

export default PostPlayerSectionContainer;
