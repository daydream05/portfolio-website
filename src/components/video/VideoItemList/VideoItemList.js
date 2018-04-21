import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';
import VideoItem from '../VideoItem/VideoItem';

const ListItem = styled.li`
  margin: 30px 0;
`;

const NoDecorationLink = styled(Link)`
  text-decoration: none;
`;

const List = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
`;

const VideoItemList = ({ videos, parentUrl }) => {

  return (
    <List>
      {videos.map((video) => {
        console.log(video);
        return ( 
          <ListItem key={video.node.id}>
          <NoDecorationLink
            to={{
              pathname: video.node.fields.url,
              state: {
                isInModal: true,
                parentUrl: parentUrl,
              }
            }}
          >
            <VideoItem 
              title={video.node.title} 
              description={video.node.shortDescription}
              backgroundImageSrc={video.node.coverImage.sizes.src}
            />
          </NoDecorationLink>
          </ListItem>
        )
      })}
    </List>
  )
}

export default VideoItemList;

export const VideoItemListFragment = graphql`
  fragment VideoItemListFragment on ContentfulVideo {
    coverImage {
      sizes(maxWidth: 1440) {
        ...GatsbyContentfulSizes
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