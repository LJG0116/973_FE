import React, { useEffect, useState, useCallback } from 'react';
import { getMyPosts } from '@apis/post';
import { MyPostSection } from '@components/Section';
import { useUsers } from '@contexts/UserProvider';

const initialState = [
  {
    title: '',
    location: [],
    sport: [],
    text: '',
    userId: '',
  },
];

const MyPostSectionContainer = () => {
  const [values, setValues] = useState(initialState);
  // const [page, setPage] = useState(1);
  const { user } = useUsers();

  const init = useCallback(async () => {
    const response = await getMyPosts({ page: 1, userId: user.userId });
    setValues(response.data);
    console.log(response.data);
  }, [user.userId]);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <>
      <MyPostSection values={values} />
    </>
  );
};

export default MyPostSectionContainer;
