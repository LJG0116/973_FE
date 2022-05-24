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
              values.profileImage ||
              'https://973s3.s3.ap-northeast-2.amazonaws.com/3c861103-5d9d-4d1a-af4b-7565571cbac0.png'
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
              value={values.nickname}
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
        name="intro"
        value={values.intro}
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
