import React from 'react';
import styles from './ButtonInput.module.scss';
import classNames from 'classnames/bind';
import { useHistory } from 'react-router-dom';

const cx = classNames.bind(styles);

const ButtonInput = (props) => {
  const { className: rootClassName } = props;
  const className = cx(styles.root, rootClassName);
  const history = useHistory();
  return (
    <form className={className} onClick={() => history.push('/search')}>
      <input
        className={styles.search}
        type="text"
        placeholder="클릭 시 검색페이지로 이동합니다."
        disabled
      />
      <div className={styles.input_wrapper}>
        <div className={styles.modal}>지역</div>
        <div className={styles.modal}>종목</div>
        <button className={styles.button_search} type="submit" />
      </div>
    </form>
  );
};

export default ButtonInput;
