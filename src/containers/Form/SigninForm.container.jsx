import React from 'react';
import { useHistory } from 'react-router-dom';
import { SigninForm } from '@components/Form';
import { useForm } from '@hooks';
import { validationEmail } from '@utils/validation';
import { signin } from '@apis/auth';
import { useUsers } from '@contexts/UserProvider';

const SigninFormContainer = (props) => {
  const { values, errors, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ email, password }) => {
      const response = await signin({ email, password });

      if (!response) return;
      addUser(response.data);

      history.push('/');
    },
    validate: ({ email, password }) => {
      const newErrors = {};
      if (!email) newErrors.email = '이메일을 입력해주세요.';
      else if (!validationEmail(email))
        newErrors.email = '잘못된 이메일 형식입니다.';
      if (!password) newErrors.password = '비밀번호를 입력해주세요.';
      return newErrors;
    },
  });
  const { addUser } = useUsers();
  const history = useHistory();

  return (
    <SigninForm
      values={values}
      errors={errors}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default SigninFormContainer;
