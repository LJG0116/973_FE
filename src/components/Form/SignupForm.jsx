import React from 'react';
import styles from './SignupForm.module.scss';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

const SignupForm = (props) => {
  const {
    values = {},
    errors = {},
    onChange = () => console.log('onChange'),
    onEmailClick = () => console.log('onClick'),
    onNicknameClick = () => console.log('onClick'),
    onSubmit = () => console.log('onChange'),
    history,
    className: rootClassName,
  } = props;

  const className = cx(styles.root, rootClassName);

  return (
    <form className={className} onSubmit={onSubmit}>
      <h1 className={styles.title}>회원가입</h1>
      <div className={styles.wrapper}>
        <input
          className={styles.input__small}
          type="text"
          value={values.email}
          name="email"
          placeholder="이메일을 입력하세요."
          onChange={onChange}
        />
        <button
          className={styles.button__small}
          type="button"
          onClick={onEmailClick}
        >
          확인
        </button>
      </div>
      <div className={styles.error}>
        {errors.emailCheck || errors.email}&nbsp;
      </div>
      <div className={styles.wrapper}>
        <input
          className={styles.input__small}
          type="text"
          value={values.nickname}
          name="email"
          placeholder="닉네임을 입력하세요."
          onChange={onChange}
        />
        <button
          className={styles.button__small}
          type="button"
          onClick={onNicknameClick}
        >
          확인
        </button>
      </div>
      <div className={styles.error}>
        {errors.emailCheck || errors.email}&nbsp;
      </div>
      <input
        className={styles.input__large}
        type="password"
        value={values.password}
        name="password"
        placeholder="비밀번호를 입력하세요."
        onChange={onChange}
      />
      <div className={styles.error}>{errors.password}&nbsp;</div>
      <input
        className={styles.input__large}
        type="password"
        value={values.passwordCheck}
        name="passwordCheck"
        placeholder="비밀번호를 다시 한번 입력하세요."
        onChange={onChange}
      />
      <div className={styles.error}>{errors.passwordCheck}&nbsp;</div>
      <div className={styles.wrapper}>
        <button
          className={cx(styles.button__small, styles.confirm)}
          type="submit"
        >
          회원가입
        </button>
        <button
          className={cx(styles.button__small, styles.confirm)}
          type="button"
          onClick={() => history.push('/')}
        >
          취소
        </button>
      </div>
    </form>
  );
};

export default withRouter(SignupForm);
