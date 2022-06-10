import React from 'react';
import styled from 'styled-components';

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

const StyledRoot = styled.article`
  font-size: 1.5rem;
`;

const StoreName = styled.a``;
const StoreAddress = styled.p``;
const StorePhoneNumber = styled.p``;
