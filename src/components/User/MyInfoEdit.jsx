import React, { useRef } from 'react';
import styles from './MyInfoEdit.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MyInfoEdit = (props) => {
  const {
    values,
    onChange,
    onSubmit,
    onUpload,
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
              'https://user-images.githubusercontent.com/69751205/163665912-a318a7a0-3c6f-4fd3-a8b0-d684811aa7ca.jpeg'
            }
            alt=""
          />
        </div>
        <input
          className={styles.profile__input}
          type="text"
          name="nickname"
          value={values.name}
          placeholder="변경할 이메일을 입력해주세요."
          onChange={onChange}
        />
        <button
          className={styles.profile_button_small}
          type="button"
          // onClick={}
        >
          확인
        </button>
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

export default MyInfoEdit;
