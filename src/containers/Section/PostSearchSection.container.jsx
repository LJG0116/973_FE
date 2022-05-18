import React, { useState } from 'react';
import { PostSearchSection } from '@components/Section';
import { useForm } from '@hooks';
import { searchPost } from '@apis/search';

const PostSearchSectionContainer = () => {
  const { values, handleChange, handleSubmit, handleListClick } = useForm({
    initialValues: {
      keyword: '',
      sport: [],
      location: [],
      type: '',
    },
    onClick: (e) => {
      console.log(e);
    },
    onSubmit: async ({ keyword, sport, location, type }) => {
      const response = await searchPost({
        keyword,
        sport,
        location,
        type: '',
        page: 1,
      });
      setSearch(response.data);
      //setValues({});
    },
    validate: () => {},
  });
  const [search, setSearch] = useState([]);
  return (
    <PostSearchSection
      values={values}
      search={search}
      onListClick={handleListClick}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default PostSearchSectionContainer;
