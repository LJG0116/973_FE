import React, { useState } from 'react';
import styles from './LocationModal.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const location = require('./location.json');

const LocationModal = (props) => {
  const { onClick = () => console.log('onClick'), className: rootClassName } =
    props;
  const [seletedMainLocation, setSeletedMainLocation] = useState({
    mainRegion: '',
    subRegion: [],
  });
  const [selectedSubLocation, setSelectedSubLocation] = useState([]);

  const className = cx(styles.root, rootClassName);

  const handleMainRegionClick = (e) => {
    const value = e.currentTarget.getAttribute('value');

    if (value === '세종특별자치도') {
      if (
        selectedSubLocation.findIndex(
          (element) => element === '세종특별자치도'
        ) !== -1
      ) {
        setSelectedSubLocation(
          selectedSubLocation.filter((element) => element !== '세종특별자치도')
        );
        return;
      }
      setSelectedSubLocation([...selectedSubLocation, value]);
    }

    setSeletedMainLocation({
      mainRegion: value,
      subRegion: location.data.filter(
        (element) => element.mainRegion === value
      )[0].subRegion,
    });
  };

  const handleSubRegionClick = (e) => {
    const value = e.currentTarget.getAttribute('value');
    console.log(value);
    const filteredLocation = selectedSubLocation.filter(
      (element) => element === value
    );

    if (filteredLocation.length) {
      setSelectedSubLocation(
        selectedSubLocation.filter((element) => element !== value)
      );
      return;
    }

    setSelectedSubLocation([...selectedSubLocation, value]);
  };

  return (
    <div className={className} onClick={onClick}>
      <div
        className={styles.modal__wrapper}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2 className={styles.sub__title}>시/도를 선택해주세요.</h2>
        <div className={styles.badge__wrapper}>
          {location.data.map((element) => (
            <span
              className={styles.badge}
              value={element.mainRegion}
              key={element.mainRegion}
              onClick={handleMainRegionClick}
            >
              {element.mainRegion}
            </span>
          ))}
        </div>
        <h2 className={styles.sub__title}>시/군/구를 선택해주세요.</h2>
        <div className={styles.badge__wrapper}>
          {seletedMainLocation.subRegion.map((element) => (
            <span
              className={styles.badge}
              key={element}
              name="location"
              value={`${seletedMainLocation.mainRegion}>${element}`}
              onClick={handleSubRegionClick}
            >
              {element}
            </span>
          ))}
        </div>
        <div className={styles.selected__wrapper}>
          {selectedSubLocation.map((element) => (
            <span
              className={styles.badge}
              value={element}
              key={element}
              onClick={handleSubRegionClick}
            >
              {element}
            </span>
          ))}
        </div>
        <div className={styles.button__wrapper}>
          <button className={styles.button}>확인</button>
          <button className={styles.button} onClick={onClick}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
