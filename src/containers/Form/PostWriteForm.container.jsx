import React from 'react';
import { PostWriteForm } from '@components/Form';
import { useForm } from '@hooks';

const PostWriteFormContainer = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleImageUpload,
    handleLocationClick,
  } = useForm({
    initialValues: {
      postImages: [],
      title: '',
      subject: '',
      location: '',
      text: '',
    },
    onClick: (e) => {
      console.log(e);
    },
    onSubmit: (e) => {
      console.log(e);
    },
    validate: ({ title, subject, location, text }) => {
      const newErrors = {};
      if (!title) newErrors.title = '제목을 입력해주세요.';
      if (!subject) newErrors.title = '과목을 입력해주세요.';
      if (!location) newErrors.title = '위치를 선택해주세요.';
      if (!text) newErrors.title = '본문을 입력해주세요.';
      return newErrors;
    },
  });

  return (
    <PostWriteForm
      values={values}
      errors={errors}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onUpload={handleImageUpload}
      onLocationClick={handleLocationClick}
    />
  );
};

export default PostWriteFormContainer;
