import React from 'react';
import styles from './LayoutColumn.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Layout = (props) => {
  const { children, className: rootClassName } = props;

  const className = cx(styles.root, rootClassName);

  return <div className={className}>{children}</div>;
};

export default Layout;
