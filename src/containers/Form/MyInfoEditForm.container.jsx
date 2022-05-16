import React from 'react';
import { MyInfoEditForm } from '@components/Form';
import { useForm } from '@hooks';
import { useUsers } from '@contexts/UserProvider';

const MyInfoEditContainer = (props) => {
  const {
    values,
    setValues,
    handleChange,
    handleSubmit,
    handleImageUpload,
    handleNicknameClick,
  } = useForm({
    initialValues: {
      email: '',
      nickname: '',
      nicknameCheck: '',
      introduce: '',
    },
    onSubmit: () => {},
    validate: () => {},
  });
  const { removeUser } = useUsers();

  const handleClick = () => {
    removeUser();
  };

  return (
    <MyInfoEditForm
      values={values}
      setValues={setValues}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onUpload={handleImageUpload}
      onClick={handleClick}
      onEmailClick={handleNicknameClick}
    />
  );
};

export default MyInfoEditContainer;
