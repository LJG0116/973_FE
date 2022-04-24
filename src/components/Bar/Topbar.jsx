import React from 'react';
import styles from './Topbar.module.scss';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

const Topbar = (props) => {
  const { className: rootClassName, history } = props;
  const className = cx(styles.root, rootClassName);

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
          학생
        </button>
        <button
          type="button"
          onClick={() => {
            history.push('/teacher');
          }}
        >
          선생님
        </button>
        <button
          type="button"
          onClick={() => {
            history.push('/club');
          }}
        >
          동아리
        </button>
      </div>
      <div className={styles.user}>
        {/* 로그인? 마이페이지 : 로그인 */}
        <button
          type="button"
          onClick={() => {
            history.push('/my');
          }}
        >
          로그인
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
