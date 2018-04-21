import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Banner } from '../../components/Banner/Banner';
import VideoItemList from '../../components/video/VideoItemList/VideoItemList';
import { flattenEdgesIntoFieldsSlugArray } from '../../helpers/flattenEdgesIntoFieldsSlugArray';

class SecondPage extends Component {
  static contextTypes = {
    setPosts: PropTypes.func,
  }

  constructor(props, context) {
    super();

    const posts = flattenEdgesIntoFieldsSlugArray(props.data.allContentfulVideo.edges);

    console.log(posts);
    // We're adding the photos to the parent in `layouts/index.js`
    context.setPosts(posts || []);
    console.log('hello it worked');
  }
  
  render() {
    return (
      <div>
        <Banner title="Videos"/>
        <VideoItemList videos={this.props.data.allContentfulVideo.edges} parentUrl={this.props.location.pathname} />
        <Link to="/">Go back to the homepage</Link>
      </div>
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
