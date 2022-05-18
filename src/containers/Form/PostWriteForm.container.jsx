import React from 'react';
import { PostWriteForm } from '@components/Form';
import { useForm } from '@hooks';
import { useHistory, useParams } from 'react-router-dom';
import { useUsers } from '@contexts/UserProvider';
import { writePost } from '@apis/post';

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
    onClick: (e) => {},
    onSubmit: async ({ location, sport, text, title }) => {
      const { nickname, userId } = user;
      const response = await writePost({
        location,
        sport,
        text,
        title,
        nickname,
        userId,
        type,
      });

      if (!response) return;
      history.push(`/view/${response.data.postId}`);
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
  const { type } = useParams();
  const history = useHistory();
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
