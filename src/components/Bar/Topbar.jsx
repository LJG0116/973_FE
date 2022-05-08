import React from 'react';
import styles from './Topbar.module.scss';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';
import { useUsers } from '@contexts/UserProvider';

const cx = classNames.bind(styles);

const Topbar = (props) => {
  const { className: rootClassName, history } = props;
  const className = cx(styles.root, rootClassName);
  const { user } = useUsers();

  return (
    <header className={className}>
      <button
        className={styles.logo}
        type="button"
        onClick={() => {
          history.push('/');
        }}
      >
        Fitnessu
      </button>
      <div className={styles.category}>
        <button
          type="button"
          onClick={() => {
            history.push('/student');
          }}
        >
          플레이어
        </button>
        <button
          type="button"
          onClick={() => {
            history.push('/teacher');
          }}
        >
          코치
        </button>
      </div>
      <div className={styles.user}>
        <button
          type="button"
          onClick={() => {
            user ? history.push('/my') : history.push('/signin');
          }}
        >
          {user ? '마이페이지' : '로그인'}
        </button>
        <button
          type="button"
          onClick={() => {
            history.push('/chat');
          }}
        >
          채팅
        </button>
      </div>
    </header>
  );
};

export default withRouter(Topbar);
