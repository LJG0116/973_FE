import React from 'react';
import styles from './InputSearch.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const InputSearch = (props) => {
  const { onChange = () => console.log('onChange'), className: rootClassName } =
    props;

  const className = cx(styles.root, rootClassName);

  return (
    <form className={className}>
      <input
        className={styles.input__search}
        type="text"
        name="search"
        placeholder="검색어를 입력하세요."
        onChange={onChange}
      />
      <button className={styles.button__search}>검색</button>
    </form>
  );
};

export default InputSearch;
