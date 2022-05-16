import React, { useRef } from 'react';
import styles from './MyInfoEditForm.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MyInfoEditForm = (props) => {
  const {
    values = {},
    onChange = () => console.log('onChange'),
    onSubmit = () => console.log('onSubmit'),
    onUpload = () => console.log('onUpload'),
    onClick = () => console.log('onClick'),
    onEmailClick = () => console.log('onEmailClick'),
    className: rootClassName,
  } = props;
  const inputRef = useRef();

  const className = cx(styles.root, rootClassName);

  const handleClick = () => {
    inputRef?.current?.click();
  };

  return (
    <form className={className} onSubmit={onSubmit}>
      <h1 className={styles.title}>내 정보 수정</h1>
      <button className={styles.signup} type="button" onClick={onClick}>
        로그아웃
      </button>
      <div className={styles.profile__wrapper}>
        <div className={styles.profile__upload} onClick={handleClick}>
          <input
            className={styles.disabled__input}
            type="file"
            name="src"
            ref={inputRef}
            onChange={onUpload}
          />
          <img
            className={styles.profile__image}
            src={
              values.srcUrl ||
              'https://user-images.githubusercontent.com/69751205/167300027-24e32d1c-984e-4f2d-b7d1-2cef9054a81e.png'
            }
            alt=""
          />
        </div>
        <div className={styles.profile__input__wrapper}>
          <input
            className={cx(styles.profile__input, styles.profile__email)}
            type="text"
            name="email"
            value={values.email}
            placeholder="이메일"
            onChange={onChange}
            disabled
          />
          <div className={styles.profile__nickname__wrapper}>
            <input
              className={styles.profile__input}
              type="text"
              name="nickname"
              value={values.name}
              placeholder="변경할 닉네임을 입력해주세요."
              onChange={onChange}
            />
            <button
              className={styles.profile_button_small}
              type="button"
              name="nickname"
              onClick={onEmailClick}
            >
              확인
            </button>
          </div>
        </div>
      </div>
      <textarea
        className={styles.profile__textarea}
        type="text"
        name="introduce"
        value={values.introduce}
        placeholder="멋진 한 줄 소개를 입력해주세요."
        onChange={onChange}
      />
      <button className={styles.profile_button_large} type="submit">
        수정
      </button>
    </form>
  );
};

export default MyInfoEditForm;
