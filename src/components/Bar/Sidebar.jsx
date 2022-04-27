import React from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

const Sidebar = (props) => {
  const { className: rootClassName, history } = props;
  const className = cx(styles.root, rootClassName);
  return (
    <ul className={className}>
      <li
        className={styles.list}
        onClick={() => {
          history.push('/my');
        }}
      >
        내 정보
      </li>
      <li
        className={styles.list}
        onClick={() => {
          history.push('/my/');
        }}
      >
        비밀번호 수정
      </li>
      <li
        className={styles.list}
        onClick={() => {
          history.push('/my/post');
        }}
      >
        내 게시판
      </li>
    </ul>
  );
};

export default withRouter(Sidebar);
