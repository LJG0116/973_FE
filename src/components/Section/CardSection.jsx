import React from 'react';
import styles from './CardSection.module.scss';
import classNames from 'classnames/bind';
import { CardItem } from '@components/Item';
import { withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

const CardSection = (props) => {
  const { values = [], title = '', className: rootClassName } = props;
  const className = cx(styles.root, rootClassName);

  const ListItemElement = values.length ? (
    values.map((value) => <CardItem value={value} key={value.title} />)
  ) : (
    <div className={styles.nodata}>게시글이 없습니다.</div>
  );

  return (
    <div className={className}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.list}>{ListItemElement}</div>
    </div>
  );
};

export default withRouter(CardSection);
