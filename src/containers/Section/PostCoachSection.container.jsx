import React, { useEffect, useState, useCallback } from 'react';
import { ListSection } from '@components/Section';
import { getCoachPosts } from '@apis/post';
import { Paginationbar } from '@components/Bar';

const PostCoachSectionContainer = () => {
  const [values, setValues] = useState([]);
  const [page, setPage] = useState(1);

  const init = useCallback(async () => {
    const response = await getCoachPosts({ page: 1 });
    setValues(response.data);
  }, []);

  const handleClick = async (e) => {
    const { id, value } = e.target;

    if (value) {
      const response = await getCoachPosts({ page: value });
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
      <ListSection values={values} type="coach" title="코치" />
      <Paginationbar page={page} onClick={handleClick} />
    </>
  );
};

export default PostCoachSectionContainer;
