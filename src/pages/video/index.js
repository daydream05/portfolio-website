import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Banner } from '../../components/Banner/Banner';
import VideoItemList from '../../components/video/VideoItemList/VideoItemList';

const SecondPage = ({ data }) => (
  <div>
    <Banner title="Videos"/>
    <VideoItemList videos={data.allContentfulVideo.edges} />
    <Link to="/">Go back to the homepage</Link>
  </div>
);

export const VideoPageQuery = graphql`
  query VideoListQuery {
    allContentfulVideo {
      edges {
        node {
          ...VideoItemListFragment
        }
      }
    }
  }
`


export default SecondPage;
