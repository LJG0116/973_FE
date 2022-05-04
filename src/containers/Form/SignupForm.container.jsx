import React from 'react';
import { useHistory } from 'react-router';
import { SignupForm } from '@components/Form';
import { useForm } from '@hooks';
import { validationPassword } from '@utils/validation';
import { postSignup } from '@components/apis/auth';

const SignupFormContainer = (props) => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleEmailClick,
    handleNicknameClick,
  } = useForm({
    initialValues: {
      email: '',
      password: '',
      nickname: '',
    },
    onClick: (e) => {
      console.log(e);
    },
    onSubmit: ({ email, confirmPassword, nickname, password }) => {
      postSignup({
        email,
        confirmPassword,
        nickname,
        password,
      });
      history.push('/');
    },
    validate: ({ email, nickname, password, confirmPassword }) => {
      const newErrors = {};
      if (!email) newErrors.email = '이메일을 입력해주세요.';
      // else if (!validationEmail(email))
      //   newErrors.email = '잘못된 이메일 형식입니다.';
      if (!password) newErrors.password = '비밀번호를 입력해주세요.';
      else if (!validationPassword(password))
        newErrors.password =
          '비밀번호는 8자 이상, 숫자, 대문자, 소문자, 특수문자를 모두 포함해야 합니다';
      else if (password !== confirmPassword)
        newErrors.passwordCheck = '비밀번호 확인이 다릅니다.';
      if (!nickname) newErrors.nickname = '닉네임을 입력해주세요.';
      return newErrors;
    },
  });
  const history = useHistory();
  return (
    <SignupForm
      values={values}
      errors={errors}
      onChange={handleChange}
      onEmailClick={handleEmailClick}
      onNicknameClick={handleNicknameClick}
      onSubmit={handleSubmit}
    />
  );
};

export default SignupFormContainer;
