import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { PostDetailSection } from '@components/Section';
import { useUsers } from '@contexts/UserProvider';
import { useParams, useHistory } from 'react-router-dom';
import { getPost, deletePost } from '@apis/post';

const initialState = {
  title: '',
  location: [],
  sport: [],
  text: '',
  userId: '',
};

const PostDetailSectionContainer = () => {
  const { id } = useParams();
  const [values, setValues] = useState(initialState);
  const { user } = useUsers();
  const history = useHistory();
  const isMine = useMemo(
    () => user.userId === values.userId,
    [user.userId, values.userId]
  );

  const init = useCallback(async () => await getPost({ id }), [id]);

  const handleDeleteClick = async () => {
    const response = await deletePost({ id });
    if (response) history.goBack();
  };

  const handleUpdateClick = async () => {
    history.push(`/edit/${id}`);
  };

  useEffect(() => {
    const response = init();
    setValues(response);
  }, [init]);

  return (
    <PostDetailSection
      values={values}
      isMine={isMine}
      onDeleteClick={handleDeleteClick}
      onUpdateClick={handleUpdateClick}
    />
  );
};

export default PostDetailSectionContainer;
