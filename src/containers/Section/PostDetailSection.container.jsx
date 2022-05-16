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
  type: '',
};

const PostDetailSectionContainer = () => {
  const { id } = useParams();
  const [values, setValues] = useState(initialState);
  const { user } = useUsers();
  const history = useHistory();
  const isMine = useMemo(
    () => user.nickname === values.nickname,
    [user.nickname, values.nickname]
  );

  const init = useCallback(async () => {
    const response = await getPost({ id });

    setValues(response.data);
    return response;
  }, [id]);

  const handleDeleteClick = async () => {
    const response = await deletePost({ id });

    if (response) alert('삭제가 완료되었습니다!');
    values.type === 'player' ? history.push('/player') : history.push('/coach');
  };

  const handleUpdateClick = async () => {
    history.push(`/edit/${id}`);
  };

  useEffect(() => {
    init();
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
