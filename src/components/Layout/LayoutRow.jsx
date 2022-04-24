import React from 'react';
import styles from './LayoutRow.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const LayoutRow = (props) => {
  const { children, className: rootClassName } = props;

  const className = cx(styles.root, rootClassName);

  return <div className={className}>{children}</div>;
};

export default LayoutRow;
