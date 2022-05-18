import React, { useState } from 'react';
import styles from './LocationModal.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const sports = require('./sport.json');

const SportModal = (props) => {
  const {
    onClick = () => console.log('onClick'),
    onListClick = () => console.log('onListClick'),
    className: rootClassName,
  } = props;
  const [selectedSport, setSelectedSport] = useState([]);

  const className = cx(styles.root, rootClassName);

  const handleSportClick = (e) => {
    const value = e.currentTarget.getAttribute('value');
    const filteredSport = selectedSport.filter((element) => element === value);

    if (filteredSport.length) {
      setSelectedSport(selectedSport.filter((element) => element !== value));
      return;
    }

    setSelectedSport([...selectedSport, value]);
  };

  return (
    <div className={className} onClick={onClick}>
      <div
        className={styles.modal__wrapper}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2 className={styles.sub__title}>종목을 선택해주세요.</h2>
        <div className={styles.badge__wrapper}>
          {sports.data.map((element) => (
            <span
              className={styles.badge}
              value={element}
              key={element}
              onClick={handleSportClick}
            >
              {element}
            </span>
          ))}
        </div>
        <div className={styles.selected__wrapper}>
          {selectedSport.map((element) => (
            <span
              className={styles.badge}
              value={element}
              key={element}
              onClick={handleSportClick}
            >
              {element}
            </span>
          ))}
        </div>
        <div className={styles.button__wrapper}>
          <button
            className={styles.button}
            onClick={() => {
              onListClick({
                name: 'sport',
                value: selectedSport,
              });
              onClick();
            }}
          >
            확인
          </button>
          <button className={styles.button} onClick={onClick}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default SportModal;
