import React, { Component } from 'react';
import { Link } from 'gatsby'

import Layout from '../../components/Layout'

import { Banner } from '../../components/Banner/Banner';
import VideoItemList from '../../components/video/VideoItemList/VideoItemList';

class SecondPage extends Component {
  render() {
    return (
      <Layout>
        <Banner title="Videos"/>
        <VideoItemList videos={this.props.data.allContentfulVideo.edges} parentUrl={this.props.location.pathname} />
        <Link to="/">Go back to the homepage</Link>
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
