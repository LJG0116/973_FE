import React from 'react';
import styles from './PostDetailSection.module.scss';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

const PostDetailSection = (props) => {
  const { values = {}, className: rootClassName } = props;
  const className = cx(styles.root, rootClassName);

  return (
    <div className={className}>
      <h1 className={styles.title}>게시글 조회</h1>
      <div className={styles.wrapper}>
        {/* 제목 */}
        <h1 className={styles.post__title}>{values.title || '제목'}</h1>
        <div className={styles.detail__wrapper}>
          <span className={styles.post__author}>
            {values.author || '김빡빡'}
          </span>
          <span className={styles.post__date}>
            {values.date || '0000-00-00'}
          </span>
        </div>
      </div>
      {/* 위치 */}
      <div className={styles.badge__wrapper}>
        {values.location?.map((element) => (
          <span className={styles.badge} value={element} key={element}>
            {element}
          </span>
        ))}
      </div>
      {/* 종목 */}
      <div className={styles.badge__wrapper}>
        {values.sport?.map((element) => (
          <span className={styles.badge} value={element} key={element}>
            {element}
          </span>
        ))}
      </div>
      {/* 본문 */}
      <div className={styles.post__textarea}>{values.text || '텍스트'}</div>
    </div>
  );
};

export default withRouter(PostDetailSection);
