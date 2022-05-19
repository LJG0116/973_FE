import React from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { withRouter, useHistory } from 'react-router-dom';

const cx = classNames.bind(styles);

const Paginationbar = (props) => {
  const { className: rootClassName } = props;
  const history = useHistory();
  const className = cx(styles.root, rootClassName);

  return <ul className={className}></ul>;
};

export default withRouter(Paginationbar);
