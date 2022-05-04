import React from 'react';
import styles from './SigninForm.module.scss';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

const SigninForm = (props) => {
  const {
    values = {},
    errors = {},
    onChange = () => console.log('onChange'),
    onSubmit = () => console.log('onChange'),
    history,
    className: rootClassName,
  } = props;
  const className = cx(styles.root, rootClassName);

  return (
    <form className={className} onSubmit={onSubmit}>
      <h1 className={styles.title}>로그인</h1>
      <input
        className={styles.input__large}
        type="text"
        value={values.email}
        name="email"
        placeholder="이메일을 입력하세요."
        onChange={onChange}
      />
      <div className={styles.error}>{errors.email}&nbsp;</div>
      <input
        className={styles.input__large}
        type="password"
        value={values.password}
        name="password"
        placeholder="비밀번호를 입력하세요."
        onChange={onChange}
      />
      <div className={styles.error}>{errors.password}&nbsp;</div>
      <button className={styles.button__large} type="submit">
        로그인
      </button>
      <div className={styles.text__wrapper}>
        <span
          className={styles.text}
          onClick={() => {
            history.push('/signup');
          }}
        >
          아이디 찾기
        </span>
        <span
          className={styles.text}
          onClick={() => {
            history.push('/signup');
          }}
        >
          회원가입하기
        </span>
      </div>
    </form>
  );
};

export default withRouter(SigninForm);
