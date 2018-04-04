import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledImg = styled(Img)`
  & {
    display: block;
  }
`;

const AlbumPhoto = (props) => (
  <div
    style={{
      display: `block`,
      flex: `100%`,
      width: `100%`,
      maxWidth: 293,
      position: `relative`,
    }}
  >
    <div
      style={{
        flexDirection: `column`,
        flexShrink: 0,
        position: `relative`,
        overflow: `hidden`,
      }}
    >
      <StyledImg
        sizes={props.sizes} 
        alt={props.title} 
      />
    </div>
  </div>
);

export default AlbumPhoto;