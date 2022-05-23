import React from 'react';
import styles from './PostPlayerSection.module.scss';
import classNames from 'classnames/bind';
import { useHistory, withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

const ChatSection = (props) => {
  const {
    values = {},
    message = '',
    onSubmit = () => console.log('onSubmit'),
    onChange = () => console.log('onChange'),
    className: rootClassName,
  } = props;

  const className = cx(styles.root, rootClassName);

  return (
    <div className={className}>
      <h1 className={styles.title}>채팅</h1>
      <div className={styles.message__list}>
        {values.messages &&
          values.messages.map((element) => (
            <div
              className={
                values.senderId === element.userId
                  ? styles.message__sender
                  : styles.message__receiver
              }
              key={element.messageTime}
            >
              <div className={styles.message} key={element.messageTime}>
                {element.content}
                <span>{element.messageTime.split('T')[1]}</span>
              </div>
            </div>
          ))}
      </div>
      <form className={styles.message__input__wrapper} onSubmit={onSubmit}>
        <input
          className={styles.message__input}
          value={message}
          type="text"
          name="message"
          placeholder="메세지를 입력하세요."
          onChange={onChange}
        />
        <button type="submit">보내기</button>
      </form>
    </div>
  );
};

export default withRouter(ChatSection);
