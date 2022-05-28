import React from 'react';
import styles from './ListSection.module.scss';
import classNames from 'classnames/bind';
import { ListItem } from '@components/Item';
import { useHistory, withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

const ListSection = (props) => {
  const {
    values = {},
    title = '',
    type = '',
    className: rootClassName,
  } = props;
  const history = useHistory();
  const className = cx(styles.root, rootClassName);

  const ListItemElement = values.map((value) => (
    <ListItem value={value} key={value.title} />
  ));

  return (
    <div className={className}>
      <h1 className={cx(styles.title, { [styles.my]: !type })}>{title}</h1>
      {type && (
        <button
          className={styles.link}
          type="button"
          onClick={() => history.push(`/write/${type}`)}
        >
          게시글 작성
        </button>
      )}
      <div className={styles.list}>
        {ListItemElement}
        {!values.length && (
          <div className={styles.nodata}>게시글이 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default withRouter(ListSection);
