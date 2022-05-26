import React from 'react';
import styles from './ChatListSection.module.scss';
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
      <div className={styles.list__wrapper}>
        {values?.map((element) => (
          <div
            className={styles.chat__list}
            key={element.receiverId}
            onClick={() =>
              history.push(`/chat/${element.senderId}/${element.receiverId}`)
            }
          >
            <img
              className={styles.profile}
              src="https://973s3.s3.ap-northeast-2.amazonaws.com/3c861103-5d9d-4d1a-af4b-7565571cbac0.png"
              alt=""
            />
            <span key={element.receiverId}>{element.receiverNickname}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withRouter(ChatListSection);
