import React from 'react';
import { StyledRoot, StoreName, StoreAddress, StorePhoneNumber } from './articleStyle';

const StoreArticle = props => {
  return (
    <StyledRoot>
      <StoreName href={props.placeUrl} target="_blank" rel="noreferrer">
        {props.placeName}
      </StoreName>
      <StoreAddress>{props.distance ? `${props.distance} m` : props.roadAddressName}</StoreAddress>
      <StorePhoneNumber>{props.phone ? props.phone : '전화번호 없음'}</StorePhoneNumber>
    </StyledRoot>
  );
};

export default StoreArticle;
