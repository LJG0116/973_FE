import React from 'react';
import styles from './PostSearchSection.module.scss';
import classNames from 'classnames/bind';
import { useHistory, withRouter } from 'react-router-dom';
import { InputSearch } from '@components/Input';

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
  const history = useHistory();

  const className = cx(styles.root, rootClassName);

  return (
    <div className={className}>
      <h1 className={styles.title}>검색</h1>
      {/* 검색바 */}
      <InputSearch
        values={values}
        onListClick={onListClick}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <div className={styles.cards__wrapper}>
        {search.length &&
          search.map((element) => (
            <div
              className={styles.card__wrapper}
              key={element.title}
              onClick={() => {
                history.push(`/view/${element.postId}`);
              }}
            >
              <div className={styles.card__profile}>
                <span className={styles.card__nickname}>
                  {element.nickname}
                </span>
                <span className={styles.card__date}>
                  {element.date?.replace(/T/g, ' ')}
                </span>
              </div>
              <h2>{element.title}</h2>
              {/* <div>{element.text}</div> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default withRouter(PostSearchSection);
