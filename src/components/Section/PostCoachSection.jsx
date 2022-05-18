import React from 'react';
import styles from './PostCoachSection.module.scss';
import classNames from 'classnames/bind';
import { useHistory, withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

const PostCoachSection = (props) => {
  const { values = {}, className: rootClassName } = props;
  const history = useHistory();

  const className = cx(styles.root, rootClassName);

  return (
    <div className={className}>
      <h1 className={styles.title}>코치</h1>
      <button
        className={styles.write__button}
        type="button"
        onClick={() => history.push('/write/coach')}
      >
        게시글 작성
      </button>
      <div className={styles.cards__wrapper}>
        {values.length ? (
          values.map((element) => (
            <div
              className={styles.card__wrapper}
              key={element.title}
              onClick={() => {
                history.push(`/view/${element.postId}`);
              }}
            >
              <div className={styles.card__profile}>
                <span className={styles.card__nickname}>
                  {element.nickname}
                </span>
                <span className={styles.card__date}>
                  {element.date?.replace(/T/g, ' ')}
                </span>
              </div>
              <h2>{element.title}</h2>
              {/* <div>{element.text}</div> */}
            </div>
          ))
        ) : (
          <div className={styles.nodata}>게시글이 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default withRouter(PostCoachSection);
