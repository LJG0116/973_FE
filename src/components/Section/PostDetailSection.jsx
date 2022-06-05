import React from 'react';
import styles from './PostDetailSection.module.scss';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

const PostDetailSection = (props) => {
  const {
    values = {},
    isMine = false,
    onDeleteClick = () => console.log('onDeleteClick'),
    onUpdateClick = () => console.log('onUpdateClick'),
    onChatClick = () => console.log('onChatClick'),
    className: rootClassName,
  } = props;
  const className = cx(styles.root, rootClassName);

  return (
    <div className={className}>
      <h1 className={styles.title}>게시글 조회</h1>
      <div className={styles.wrapper}>
        {/* 제목 */}
        <div className={styles.title_wrapper}>
          <h1 className={styles.post_title}>{values.title || '제목'}</h1>
          <span className={styles.post_badge}>
            {values.type === 'player' ? '플레이어' : '코치'}
          </span>
        </div>
        <div className={styles.detail_wrapper}>
          <img
            className={styles.image}
            src={
              values.profileImage ||
              'https://973s3.s3.ap-northeast-2.amazonaws.com/3c861103-5d9d-4d1a-af4b-7565571cbac0.png'
            }
            alt=""
          />
          <span className={styles.author}>{values.nickname || 'noname'}</span>
          {!isMine && (
            <button type="button" onClick={onChatClick}>
              채팅
            </button>
          )}
          <div className={styles.date}>
            {values.date?.replace(/T/g, ' ') || '0000-00-00'}
          </div>
        </div>
      </div>
      {/* 위치 */}
      <div className={styles.badge_wrapper}>
        {values.area?.map(
          (element) =>
            element && (
              <span className={styles.badge} value={element} key={element}>
                {element}
              </span>
            )
        )}
      </div>
      {/* 종목 */}
      <div className={cx(styles.badge_wrapper, styles.last)}>
        {values.category?.map(
          (element) =>
            element && (
              <span className={styles.badge} value={element} key={element}>
                {element}
              </span>
            )
        )}
      </div>
      {/* 본문 */}
      <div className={styles.textarea}>{values.text || '텍스트'}</div>
      {isMine && (
        <div className={styles.button_wrapper}>
          <button
            className={styles.button}
            type="button"
            onClick={onUpdateClick}
          >
            수정
          </button>
          <button
            className={styles.button}
            type="button"
            onClick={onDeleteClick}
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default withRouter(PostDetailSection);
