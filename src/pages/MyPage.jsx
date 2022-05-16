import React from 'react';
import { LayoutRow } from '@components/Layout';
import { MyInfoEditFormContainer } from '@containers/Form';

const MyPage = (props) => {
  return (
    <LayoutRow>
      <MyInfoEditFormContainer />
    </LayoutRow>
  );
};

export default MyPage;
