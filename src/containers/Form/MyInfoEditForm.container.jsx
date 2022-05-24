import React, { useEffect, useCallback } from 'react';
import { MyInfoEditForm } from '@components/Form';
import { useForm } from '@hooks';
import { useUsers } from '@contexts/UserProvider';
import { getMyInfo } from '@apis/auth';

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
      intro: '',
      profileImage: '',
    },
    onSubmit: ({ email, intro, nickname, profileImage }) => {},
    validate: () => {},
  });
  const { user, removeUser } = useUsers();

  const handleClick = () => {
    removeUser();
  };

  const init = useCallback(async () => {
    const { data } = await getMyInfo({ userId: user.userId });
    console.log(data);

    setValues({
      email: data.email,
      intro: data.intro,
      nickname: data.nickname,
      profileImage: data.profileImage,
    });
  }, [user.userId, setValues]);

  useEffect(() => {
    init();
  }, [init]);

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
