import React, { useEffect, useState } from 'react';
import { PostDetailSection } from '@components/Section';

const initialState = {
  title: '',
  location: [],
  sport: [],
  text: '',
  isMine: 0,
};

const PostDetailSectionContainer = () => {
  const [values] = useState(initialState);

  useEffect(() => {
    // get 게시글 정보 조회 API 호출
  }, [values]);

  return (
    <PostDetailSection
      title={values.title}
      location={values.location}
      sport={values.sport}
      text={values.text}
      isMine={values.isMine}
    />
  );
};

export default PostDetailSectionContainer;
