import React, { useEffect, useCallback } from 'react';
import { PostWriteForm } from '@components/Form';
import { useForm } from '@hooks';
import { useParams, useHistory } from 'react-router-dom';
import { getPost, postUpdatePost } from '@apis/post';
import { useUsers } from '@contexts/UserProvider';

const PostEditFormContainer = () => {
  const {
    values,
    setValues,
    errors,
    handleChange,
    handleSubmit,
    handleImageUpload,
    handleListClick,
  } = useForm({
    initialValues: {
      postImages: [],
      title: '',
      sport: [],
      location: [],
      text: '',
    },
    onClick: (e) => {
      console.log(e);
    },
    onSubmit: async ({ location, sport, text, title }) => {
      const response = await postUpdatePost({
        location,
        sport: sport[0],
        text,
        title,
        userId: user.userId,
      });

      if (!response) return;
      console.log(response);
      // 변경한 게시글로 이동 예정
    },
    validate: ({ title, sport, location, text }) => {
      const newErrors = {};
      if (!title) newErrors.title = '제목을 입력해주세요.';
      if (!sport) newErrors.title = '종목을 선택해주세요.';
      if (!location) newErrors.title = '지역을 선택해주세요.';
      if (!text) newErrors.title = '본문을 입력해주세요.';
      return newErrors;
    },
  });
  const { id } = useParams();
  const history = useHistory();
  const { user } = useUsers();

  const init = useCallback(async () => await getPost({ id }), [id]);

  useEffect(() => {
    const response = init();
    setValues(response);
  }, [setValues, init]);

  return (
    <PostWriteForm
      values={values}
      errors={errors}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onUpload={handleImageUpload}
      onListClick={handleListClick}
    />
  );
};

export default PostEditFormContainer;
