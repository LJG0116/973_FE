import React from 'react';
import styles from './Banner.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Banner = (props) => {
  const { className: rootClassName } = props;
  const className = cx(styles.root, rootClassName);
  return (
    <div className={className}>
      {/* <div className={styles.banner__title}>Fitnessu</div> */}
      <img
        className={styles.banner__image}
        src="https://user-images.githubusercontent.com/69751205/165577722-08d87c19-ec97-405d-b691-1e492211b467.png"
        alt="미리보기"
      />
      <div className={styles.banner__text}>
        운동?
        <br />
        혼자하면 다쳐요!
        <br />내 몸은 소중하니까-
      </div>
    </div>
  );
};

export default Banner;
