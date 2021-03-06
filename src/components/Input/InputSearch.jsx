import React, { useState } from 'react';
import styles from './InputSearch.module.scss';
import classNames from 'classnames/bind';
import { LocationModal, SportModal } from '@components/Modal';

const cx = classNames.bind(styles);

const InputSearch = (props) => {
  const {
    values = {},
    onSubmit = () => console.log('onSubmit'),
    onChange = () => console.log('onChange'),
    onListClick = () => console.log('onListClick'),
    className: rootClassName,
  } = props;
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isSportOpen, setIsSportOpen] = useState(false);

  const className = cx(styles.root, rootClassName);

  const handleLocationClick = () => {
    setIsLocationOpen(!isLocationOpen);
  };

  const handleSportClick = () => {
    setIsSportOpen(!isSportOpen);
  };

  return (
    <form className={className} onSubmit={onSubmit}>
      <input
        className={styles.input_search}
        type="text"
        name="keyword"
        value={values.keyword || ''}
        placeholder="검색어를 입력하세요."
        onChange={onChange}
      />
      <div className={styles.input_wrapper}>
        <div>
          <input
            type="radio"
            name="type"
            id="player"
            value="player"
            onChange={onChange}
          />
          <label for="player">플레이어</label>
          <input
            type="radio"
            name="type"
            id="coach"
            value="coach"
            onChange={onChange}
          />
        </div>
        <label for="coach">코치</label>
        <div className={styles.modal} onClick={handleLocationClick}>
          지역
        </div>
        <div className={styles.modal} onClick={handleSportClick}>
          종목
        </div>
        <button
          className={styles.button_search}
          type="submit"
          onClick={() => {}}
        />
      </div>
      <div className={styles.badges}>
        {values.location?.map((element) => (
          <span className={styles.badge} key={element}>
            {element}
          </span>
        ))}
      </div>
      {isLocationOpen ? (
        <LocationModal
          onClick={handleLocationClick}
          onListClick={onListClick}
        />
      ) : (
        ''
      )}
      <div className={styles.badges}>
        {values.sport?.map((element) => (
          <span className={styles.badge} key={element}>
            {element}
          </span>
        ))}
      </div>
      {isSportOpen ? (
        <SportModal onClick={handleSportClick} onListClick={onListClick} />
      ) : (
        ''
      )}
    </form>
  );
};

export default InputSearch;
