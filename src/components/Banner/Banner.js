import React from 'react';
import styled from 'styled-components';

const BannerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-height: 105px;
`;

const BannerTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Banner = (props) => (
  <BannerStyle>
    <BannerTitle>{props.title}</BannerTitle>
  </BannerStyle>
);