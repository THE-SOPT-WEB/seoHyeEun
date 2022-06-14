import React from 'react';
import { StyledRoot, StoreName, StoreAddress, StorePhoneNumber } from './articleStyle';

const StoreArticle = () => {
  return (
    <StyledRoot className="skeleton">
      <StoreName className="skeleton" />
      <StoreAddress className="skeleton" />
      <StorePhoneNumber className="skeleton" />
    </StyledRoot>
  );
};

export default StoreArticle;
