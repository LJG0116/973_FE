import React, { useState } from 'react';
import styles from './PostEditForm.module.scss';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';
import { LocationModal, SportModal } from '@components/Modal';
const cx = classNames.bind(styles);

const PostEditForm = (props) => {
  const {
    values = {},
    onChange = () => console.log('onChange'),
    onSubmit = () => console.log('onSubmit'),
    onListClick = () => console.log('onListClick'),
    className: rootClassName,
  } = props;
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isSportOpen, setIsSportOpen] = useState(false);
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
        <p>지역 선택하기 &gt;</p>
        <div className={styles.span__wrapper}>
          {values.location.map((element) => (
            <span className={styles.badge} key={element}>
              {element}
            </span>
          ))}
        </div>
      </div>
      {isLocationOpen ? (
        <LocationModal
          onClick={handleLocationClick}
          onListClick={onListClick}
        />
      ) : (
        ''
      )}
      {/* 종목 */}
      <div className={styles.modal} onClick={handleSportClick}>
        <p>종목 선택하기 &gt;</p>
        <div className={styles.span__wrapper}>
          {values.sport.map((element) => (
            <span className={styles.badge} key={element}>
              {element}
            </span>
          ))}
        </div>
      </div>
      {isSportOpen ? (
        <SportModal onClick={handleSportClick} onListClick={onListClick} />
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

export default withRouter(PostEditForm);
