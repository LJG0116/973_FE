import React from 'react';
import { PostWriteForm } from '@components/Form';
import { useForm } from '@hooks';
import { useUsers } from '@contexts/UserProvider';
import { postWritePost } from '@apis/post';

const PostWriteFormContainer = () => {
  const {
    values,
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
      const response = await postWritePost({
        location,
        sport: sport[0],
        text,
        title,
        userId: user.userId,
      });

      if (!response) return;
      console.log(response);
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
  const { user } = useUsers();

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

export default PostWriteFormContainer;
