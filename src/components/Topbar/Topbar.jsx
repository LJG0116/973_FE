import React from 'react';
import styles from './Topbar.module.scss';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

const Topbar = (props) => {
  const { className: rootClassName, history } = props;
  const className = cx(styles.root, rootClassName);

  return (
    <div className={className}>
      <button
        className={styles.title}
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
      <button
        className={styles.my}
        type="button"
        onClick={() => {
          history.push('/my');
        }}
      >
        마이페이지
      </button>
    </div>
  );
};

export default withRouter(Topbar);
