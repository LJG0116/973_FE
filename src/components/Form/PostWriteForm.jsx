import React, { useState } from 'react';
import styles from './PostWriteForm.module.scss';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';
import { LocationModal } from '@components/Modal';

const cx = classNames.bind(styles);

const PostWriteForm = (props) => {
  const {
    values = {},
    errors = {},
    onChange = () => console.log('onChange'),
    onSubmit = () => console.log('onSubmit'),
    onLocationClick = () => console.log('onLocationClick'),
    className: rootClassName,
  } = props;
  const [isLocationOpen, setIsLocationOpen] = useState(true);
  const className = cx(styles.root, rootClassName);

  const handleClick = () => {
    setIsLocationOpen(!isLocationOpen);
  };

  return (
    <form className={className} onSubmit={onSubmit}>
      <h1 className={styles.title}>게시글 쓰기</h1>
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
      </div>
      {/* 과목 */}
      <div className={styles.modal} onClick={handleClick}>
        과목 선택하기 &gt;
      </div>
      {/* 위치 */}
      <div className={styles.modal} onClick={handleClick}>
        지역 선택하기 &gt;
      </div>
      {isLocationOpen ? (
        <LocationModal
          onClick={handleClick}
          onLocationClick={onLocationClick}
        />
      ) : (
        ''
      )}
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

export default withRouter(PostWriteForm);
