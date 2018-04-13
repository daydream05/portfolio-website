import React from 'react';
import styled from 'styled-components';

const BannerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 155px;
`;

const BannerTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  font-family: Europa;
  text-transform: uppercase;
`;

export const Banner = (props) => (
  <BannerStyle>
    <BannerTitle>{props.title}</BannerTitle>
  </BannerStyle>
);