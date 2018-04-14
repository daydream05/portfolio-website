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
`;

const Header = styled.header `
  font-size: 64px;
  font-family: Europa;
  font-style: italic;
  font-weight: 700;
  color: #fff;
`;

const Description = styled.p `
  font-size: 18px;
  font-family: Europa;
  text-align: center;
  color: #fff;
`;

const VideoItem = (props) => (
  <div>
    <VideoImageContainer image={props.backgroundImageSrc}>
      <div>
        <Content>
          <Header>{props.title}</Header>
          <Description>{props.description}</Description>
        </Content>
        <VideoImageOverlay />
      </div>
    </VideoImageContainer>
  </div>
);

VideoItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default VideoItem;

