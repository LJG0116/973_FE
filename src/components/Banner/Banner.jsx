import React from 'react';
import styles from './Banner.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Banner = (props) => {
  const { className: rootClassName } = props;
  const className = cx(styles.root, rootClassName);
  return (
    <div className={className}>
      <h1 className={styles.banner__title}>Fitnessu</h1>
    </div>
  );
};

export default Banner;
