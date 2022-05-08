import React from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';
import { useUsers } from '@contexts/UserProvider';

const cx = classNames.bind(styles);

const Sidebar = (props) => {
  const { className: rootClassName, history } = props;
  const className = cx(styles.root, rootClassName);
  const { removeUser } = useUsers();

  const handleClick = () => {
    removeUser();
  };

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
      <li className={cx(styles.list, styles.last__child)} onClick={handleClick}>
        로그아웃
      </li>
    </ul>
  );
};

export default withRouter(Sidebar);
