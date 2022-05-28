import React from 'react';
import styles from './ListItem.module.scss';
import classNames from 'classnames/bind';
import { useHistory, withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

const ListItem = (props) => {
  const { value = {}, className: rootClassName } = props;
  const history = useHistory();

  const className = cx(styles.root, rootClassName);
  return (
    <div
      className={className}
      key={value.title}
      onClick={() => {
        history.push(`/view/${value.postId}`);
      }}
    >
      <div>
        <span className={styles.nickname}>{value.nickname}</span>
        <span className={styles.date}>{value.date?.replace(/T/g, ' ')}</span>
      </div>
      <div className={styles.post}>
        <h2>{value.title}</h2>
        <div className={styles.text}>{value.text}</div>
        <div className={styles.badges}>
          {/* 지역 */}
          <div>
            {value.area?.map(
              (element) =>
                element && (
                  <span className={styles.badge} value={element} key={element}>
                    {element}
                  </span>
                )
            )}
          </div>
          {/* 종목 */}
          <div>
            {value.category?.map(
              (element) =>
                element && (
                  <span className={styles.badge} value={element} key={element}>
                    {element}
                  </span>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ListItem);
