import React from 'react';
import styles from './PostPlayerSection.module.scss';
import classNames from 'classnames/bind';
import { useHistory, withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

const ChatListSection = (props) => {
  const { values = {}, className: rootClassName } = props;
  const history = useHistory();

  const className = cx(styles.root, rootClassName);

  return (
    <div className={className}>
      <h1 className={styles.title}>채팅</h1>
    </div>
  );
};

export default withRouter(ChatListSection);
