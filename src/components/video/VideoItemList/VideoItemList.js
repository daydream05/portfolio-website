import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby'

import posed, { PoseGroup } from 'react-pose'

import VideoItem from '../VideoItem/VideoItem';
import { FadeUp } from '../../PosedComponents'

const ListItem = styled.li`
  margin: 30px 0;
`;

const NoDecorationLink = styled(Link)`
  text-decoration: none;
`;

const List = styled(posed.ul({
  enter: {
    staggerChildren: 200,
  },
  exit: {
    staggerChildren: 200,
    staggerDirection: -1,
  }
}))`
  padding: 0;
  list-style: none;
  margin: 0;
`;

const VideoItemList = ({ videos }) => {

  return (
    <PoseGroup animateOnMount>
      <List key="list">
        {videos.map((video) => {
          return (
            <ListItem key={video.node.id}>
              <FadeUp>
                <NoDecorationLink
                  to={video.node.fields.url}
                >
                  <VideoItem
                    title={video.node.title}
                    description={video.node.shortDescription}
                    backgroundImageSrc={video.node.coverImage.fluid.src}
                    image={video.node.coverImage}
                  />
                </NoDecorationLink>
              </FadeUp>
            </ListItem>
          )
        })}
      </List>
    </PoseGroup>
  )
}

export default VideoItemList;

export const VideoItemListFragment = graphql`
  fragment VideoItemListFragment on ContentfulVideo {
    coverImage {
      title
      fluid(maxWidth: 1440, quality: 100) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    id
    fields {
      url
    }
    shortDescription
    title
  }
`;

VideoItemList.propTypes = {
  videos: PropTypes.array.isRequired,
};