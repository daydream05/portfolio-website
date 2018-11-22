import React, { Component } from 'react';
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../../components/Layout'
import VideoItemList from '../../components/video/VideoItemList/VideoItemList';

import { media } from '../../utils/media'

const Title = styled.h1`
  margin-top: 0;
  text-align: center;
  color: ${props => props.theme.colors.white};
  padding: 2rem;
  ${media.desktop``}
`

class SecondPage extends Component {
  render() {
    return (
      <Layout>
        <Title>Videos</Title>
        <VideoItemList videos={this.props.data.allContentfulVideo.edges} parentUrl={this.props.location.pathname} />
      </Layout>
    );
  }
};

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
