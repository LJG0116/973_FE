import React, { useEffect, useState, useCallback } from 'react';
import { PostCoachSection } from '@components/Section';
import { getCoachPosts } from '@apis/post';

const initialState = [
  {
    title: '',
    location: [],
    sport: [],
    text: '',
    userId: '',
  },
];

const PostCoachSectionContainer = () => {
  const [values, setValues] = useState(initialState);

  const init = useCallback(async () => {
    const response = await getCoachPosts({ page: 1 });
    setValues(response.data);
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  return <PostCoachSection values={values} />;
};

export default PostCoachSectionContainer;
