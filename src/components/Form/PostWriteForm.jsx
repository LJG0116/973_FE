import React, { useState } from 'react';
import styles from './PostWriteForm.module.scss';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';
import { LocationModal, SportModal } from '@components/Modal';

const cx = classNames.bind(styles);

const PostWriteForm = (props) => {
  const {
    values = {},
    onChange = () => console.log('onChange'),
    onSubmit = () => console.log('onSubmit'),
    onLocationClick = () => console.log('onLocationClick'),
    className: rootClassName,
  } = props;
  const [isLocationOpen, setIsLocationOpen] = useState(true);
  const [isSportOpen, setIsSportOpen] = useState(true);
  const className = cx(styles.root, rootClassName);

  const handleLocationClick = () => {
    setIsLocationOpen(!isLocationOpen);
  };

  const handleSportClick = () => {
    setIsSportOpen(!isSportOpen);
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
      {/* 위치 */}
      <div className={styles.modal} onClick={handleLocationClick}>
        지역 선택하기 &gt;
      </div>
      {isLocationOpen ? (
        <LocationModal
          onClick={handleLocationClick}
          onLocationClick={onLocationClick}
        />
      ) : (
        ''
      )}
      {/* 종목 */}
      <div className={styles.modal} onClick={handleSportClick}>
        종목 선택하기 &gt;
      </div>
      {isSportOpen ? (
        <SportModal
          onClick={handleSportClick}
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
