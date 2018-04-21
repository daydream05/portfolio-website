import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const VideoImageContainer = styled.article`
  min-height: 400px;
  background-color: rgba(0,0,0, 0.75);
  background-image: ${props => `url(${props.image})`};
  background-position: center center;
  background-size: cover;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ::after {
    background-color: rgba(0,0,0. 0.15);
  }
`;

const VideoImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgb(80,80,80);
  opacity: 0.45;
  transition-duration: 0.6s;
  display: block;

  :hover {
    opacity: 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  z-index: 1;
`;

const Header = styled.header`
  margin-bottom: 16px;
`;

const HeaderTitle = styled.h1`
   font-style: italic;
   color: #fff;
   font-size: 64px;
`;

const Description = styled.p`
  text-align: center;
  color: #fff;
`;

const VideoItem = (props) => (
  <div>
    <VideoImageContainer image={props.backgroundImageSrc}>
        <Content>
          <Header>
            <HeaderTitle>{props.title}</HeaderTitle>
          </Header>
          <Description>{props.description}</Description>
        </Content>
        <VideoImageOverlay />
    </VideoImageContainer>
  </div>
);

VideoItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default VideoItem;

