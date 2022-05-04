import React from 'react';
import styles from './ErrorModal.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ErrorModal = (props) => {
  const {
    errorMessage = '',
    onClick = () => console.log('onClick'),
    className: rootClassName,
  } = props;
  const className = cx(styles.root, rootClassName);

  return (
    <div className={className} onClick={onClick}>
      <div
        className={styles.modal__wrapper}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.modal__error}>{errorMessage}</div>
        <button className={styles.confirm__button} onClick={onClick}>
          확인
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
