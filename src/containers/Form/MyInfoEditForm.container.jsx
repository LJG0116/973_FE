import React from 'react';
import { MyInfoEditForm } from '@components/Form';
import { useForm } from '@hooks';

const MyInfoEditContainer = (props) => {
  const { values, setValues, handleChange, handleSubmit, handleImageUpload } =
    useForm({
      initialValues: {},
      onSubmit: () => {},
      validate: () => {},
    });
  return (
    <MyInfoEditForm
      values={values}
      setValues={setValues}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onUpload={handleImageUpload}
    />
  );
};

export default MyInfoEditContainer;
