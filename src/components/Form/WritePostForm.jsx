import React, { useRef } from 'react';
import styles from './WritePostForm.module.scss';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

const WritePostForm = (props) => {
  const {
    values = {},
    errors = {},
    onChange = () => console.log('onChange'),
    onSubmit = () => console.log('onChange'),
    onUpload = () => console.log('onUpload'),
    className: rootClassName,
  } = props;
  const inputRef = useRef();

  const className = cx(styles.root, rootClassName);

  const handleClick = () => {
    inputRef?.current?.click();
  };

  return (
    <form className={className} onSubmit={onSubmit}>
      <h1 className={styles.title}>게시글 쓰기</h1>
      {/* 업로드 */}
      <div className={styles.post__upload} onClick={handleClick}>
        <input
          className={styles.disabled__input}
          type="file"
          name="src"
          ref={inputRef}
          onChange={onUpload}
        />
        <img
          className={styles.post__image}
          src={
            values.srcUrl ||
            'https://user-images.githubusercontent.com/69751205/163665912-a318a7a0-3c6f-4fd3-a8b0-d684811aa7ca.jpeg'
          }
          alt=""
        />
      </div>
      <div className={styles.wrapper}>
        {/* 제목 */}
        <input
          className={styles.post__input}
          name="title"
          value={values.title}
          type="text"
          placeholder="제목을 입력하세요."
          onChange={onChange}
        />
        {/* 과목 */}
        <select
          className={styles.post__select}
          name="subject"
          onChange={onChange}
        >
          <option value="default">과목</option>
          <option value="health">헬스</option>
          <option value="soccer">축구</option>
        </select>
        {/* 위치 */}
        <select
          className={styles.post__select}
          name="location"
          onChange={onChange}
        >
          <option value="default">지역</option>
          <option value="seoul">서울</option>
        </select>
      </div>
      {/* 본문 */}
      <textarea
        className={styles.post__textarea}
        name="text"
        onChange={onChange}
      />
      <button className={styles.post_button_large} type="submit">
        작성
      </button>
    </form>
  );
};

export default withRouter(WritePostForm);
