import React from 'react';
import styles from './Paginationbar.module.scss';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

const Paginationbar = (props) => {
  const {
    page = 1,
    onClick = () => console.log('onClick'),
    className: rootClassName,
  } = props;
  const className = cx(styles.root, rootClassName);

  return (
    <ul className={className}>
      <li className={styles.li} id="prev" onClick={onClick}>
        &lt;
      </li>
      <li className={styles.li} value={page} onClick={onClick}>
        {page}
      </li>
      <li className={styles.li} value={page + 1} onClick={onClick}>
        {page + 1}
      </li>
      <li className={styles.li} value={page + 2} onClick={onClick}>
        {page + 2}
      </li>
      <li className={styles.li} value={page + 3} onClick={onClick}>
        {page + 3}
      </li>
      <li className={styles.li} value={page + 4} onClick={onClick}>
        {page + 4}
      </li>
      <li className={styles.li} id="next" onClick={onClick}>
        &gt;
      </li>
    </ul>
  );
};

export default withRouter(Paginationbar);
