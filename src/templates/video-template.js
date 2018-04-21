import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import Article from '../components/Article/Article';

/**
 * This template is used for generating an individual video page.
 * Each video page is going to have it's own article written about it.
 */

const VideoSection = styled.section`
  height: 100vh;
`;

const VideoBanner = styled.div`
  height: 100%;
`;

const Page = styled.div`
  width: 100%;
  background-color: white;
`;

const VideoTemplate = ({ data }) => {
  const video = data.contentfulVideo;

  const {
    article,
    shortDescription,
    title,
    link
  } = video;

  return (
    <Page>
      <VideoSection>
        <VideoBanner>
          <ReactPlayer
            url={link}
            width="100%"
            height="100%"
          />    
        </VideoBanner>
      </VideoSection>
      <section>
        <Article 
          html={article.childMarkdownRemark.html}
          title={title}
          videoLink={link}
          shortDescription={shortDescription}
        />
      </section>
    </Page>
  );
};

export const VideoTemplateQuery = graphql`
  query VideoTemplateQuery($id: String!) {
    contentfulVideo(id: { eq: $id }) {
      title
      link
      shortDescription
      article {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default VideoTemplate;