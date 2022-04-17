import React from 'react';
import { MyInfoEdit } from '@components/User';
import { useForm } from '@hooks';

const MyInfoEditContainer = (props) => {
  const { values, setValues, handleChange, handleSubmit, handleImageUpload } =
    useForm({
      initialValues: {},
      onSubmit: () => {},
      validate: () => {},
    });
  return (
    <MyInfoEdit
      values={values}
      setValues={setValues}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onUpload={handleImageUpload}
    />
  );
};

export default MyInfoEditContainer;
