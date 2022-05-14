import React from 'react';
import { PostEditFormContainer } from '@containers/Form';
import { LayoutColumn } from '@components/Layout';

const PostEditPage = () => {
  return (
    <LayoutColumn>
      <PostEditFormContainer />
    </LayoutColumn>
  );
};

export default PostEditPage;
