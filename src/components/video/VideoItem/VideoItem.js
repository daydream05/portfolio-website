import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image'
import styled from 'styled-components';

const VideoImageContainer = styled.div`
  min-height: 400px;
  background-color: rgba(0,0,0, 0.75);
  background-position: center center;
  background-size: cover;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  ::after {
    background-color: rgba(0,0,0. 0.15);
  }
`;

const VideoCover = styled(Img)`
  position: absolute !important;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

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
  z-index: 1;
  text-align: center;
  padding: 0 24px;
`;

const Header = styled.header`
  margin-bottom: 16px;
`;

const HeaderTitle = styled.h2`
  font-style: italic;
  color: #fff;
  font-size: 36px;
  @media(min-width: 750px) {
    font-size: 64px;
  }
`;

const Description = styled.p`
  text-align: center;
  color: #fff;
`;

const VideoItem = (props) => (
  <article>
    <VideoImageContainer>
      <VideoCover fluid={props.image.fluid} alt={props.image.title}/>
        <Content>
          <Header>
            <HeaderTitle>{props.title}</HeaderTitle>
          </Header>
          <Description>{props.description}</Description>
        </Content>
        <VideoImageOverlay />
    </VideoImageContainer>
  </article>
);

VideoItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default VideoItem;

