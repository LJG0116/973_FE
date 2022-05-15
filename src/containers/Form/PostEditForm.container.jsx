import React, { useEffect, useCallback } from 'react';
import { PostEditForm } from '@components/Form';
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
        location: location.join('#'),
        sport: sport.join('#'),
        text,
        title,
        postId: id,
        nickname: user.nickname,
      });

      if (!response) return;
      history.push(`/view/${id}`);
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

  const init = useCallback(async () => {
    const { data } = await getPost({ id });
    setValues({
      location: data.area,
      title: data.title,
      sport: data.category,
      text: data.text,
      author: data.author,
    });
  }, [setValues, id]);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <PostEditForm
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
