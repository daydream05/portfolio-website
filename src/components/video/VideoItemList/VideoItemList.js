import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';
import VideoItem from '../VideoItem/VideoItem';

const ListItem = styled.li`
  margin: 30px 0;
`;

const List = styled.ul`
  padding: 0;
`;

const VideoItemList = ({ videos }) => {
  const displayVideos = () => {
    videos.map((video) => {
      return (
      <li key={video.id}>
        <VideoItem />
      </li>
      );
    })
  }

  return (
    <List>
      {videos.map((video) => {
        return ( 
          <ListItem key={video.node.id}>
          <Link
            to='first-video'
          >
            <VideoItem 
              title={video.node.title} 
              description={video.node.shortDescription}
              backgroundImageSrc={video.node.coverImage.sizes.src}
            />
          </Link>
          </ListItem>
        )
      })}
    </List>
  )
}

export default VideoItemList;

export const VideoItemListFragment = graphql`
  fragment VideoItemListFragment on ContentfulVideo {
    id
    title
    shortDescription
    coverImage {
      sizes(maxWidth: 1440) {
        ...GatsbyContentfulSizes
      }
    }
  }
`;

VideoItemList.propTypes = {
  videos: PropTypes.array.isRequired,
};