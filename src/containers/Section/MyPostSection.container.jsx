import React, { useEffect, useState, useCallback } from 'react';
import { getMyPosts } from '@apis/post';
import { ListSection } from '@components/Section';
import { useUsers } from '@contexts/UserProvider';

const MyPostSectionContainer = () => {
  const [values, setValues] = useState([]);
  const { user } = useUsers();

  const init = useCallback(async () => {
    const response = await getMyPosts({ page: 1, userId: user.userId });
    setValues(response.data);
  }, [user.userId]);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <>
      <ListSection values={values} type="" title="내 게시글" />
    </>
  );
};

export default MyPostSectionContainer;
