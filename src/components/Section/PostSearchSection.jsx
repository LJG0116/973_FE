import React from 'react';
import styles from './PostSearchSection.module.scss';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';
import { InputSearch } from '@components/Input';
import { CardSection } from '@components/Section';

const cx = classNames.bind(styles);

const PostSearchSection = (props) => {
  const {
    values = {},
    search = [],
    onSubmit = () => console.log('onSubmit'),
    onChange = () => console.log('onChange'),
    onListClick = () => console.log('onListClick'),
    className: rootClassName,
  } = props;

  const className = cx(styles.root, rootClassName);

  return (
    <div className={className}>
      <h1 className={styles.title}>검색</h1>
      <InputSearch
        values={values}
        onListClick={onListClick}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <CardSection values={search} />
    </div>
  );
};

export default withRouter(PostSearchSection);
