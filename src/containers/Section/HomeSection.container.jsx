import React from 'react';
import { Banner } from '@components/Banner';
import { InputSearch } from '@components/Input';
import { useForm } from '@hooks';
import { searchPost } from '@apis/search';

const HomeSectionContainer = (props) => {
  const {
    values,
    setValues,
    errors,
    handleChange,
    handleSubmit,
    handleListClick,
  } = useForm({
    initialValues: {
      keyword: '',
      sport: [],
      location: [],
      type: '',
    },
    onClick: (e) => {
      console.log(e);
    },
    onSubmit: ({ keyword, sport, location, type }) => {
      console.log(keyword, sport, location, type);
      const response = searchPost({
        keyword,
        sport,
        location,
        type: '',
        page: 1,
      });
      console.log(response);
      setValues({});
    },
    validate: () => {},
  });
  return (
    <>
      <Banner />
      <InputSearch
        values={values}
        onListClick={handleListClick}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default HomeSectionContainer;
