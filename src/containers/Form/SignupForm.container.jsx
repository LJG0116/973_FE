import React from 'react';
import { useHistory } from 'react-router';
import { SignupForm } from '@components/Form';
import { useForm } from '@hooks';
import { validationPassword } from '@utils/validation';
import { postSignup } from '@apis/auth';

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
      emailCheck: false,
      nicknameCheck: false,
    },
    onClick: (e) => {
      console.log(e);
    },
    onSubmit: ({
      email,
      confirmPassword,
      nickname,
      password,
      emailCheck,
      nicknameCheck,
    }) => {
      if (!emailCheck || !nicknameCheck) {
        alert('이메일, 닉네임 확인을 해주세요.');
        return;
      }
      postSignup({
        email,
        confirmPassword,
        nickname,
        password,
      });
      alert('회원가입을 축하합니다!');
      history.push('/');
    },
    validate: ({ email, nickname, password, confirmPassword }) => {
      const newErrors = {};
      if (!email) newErrors.email = '이메일을 입력해주세요.';
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
