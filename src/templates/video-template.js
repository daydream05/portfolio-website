import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import Article from '../components/Article/Article';

/**
 * This template is used for generating an individual video page.
 * Each video page is going to have it's own article written about it.
 */

const article = {
  title: "Reolens",
  description: "Part of a video project, this landing page was designed to mimic a mixed reality device wearable",
  content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh " +
  "euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad" +
    " minim ve- niam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl u" +
    "t aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit " +
    "in vul- putate velit esse molestie conse- quat, vel illum dolore eu feugiat null" +
    "a facilisis at vero eros et ac.",
}

const VideoSection = styled.section`
  height: 100vh;
`;

const VideoBanner = styled.div`
  height: 100%;
`;

const VideoTemplate = () => (
  <div>
    <VideoSection>
      <VideoBanner>
        <ReactPlayer
          url="https://vimeo.com/263880326"
          width="100%"
          height="100%"
        />
      </VideoBanner>
    </VideoSection>
    <section>
      <Article article={article} />
    </section>
  </div>
);

export default VideoTemplate;