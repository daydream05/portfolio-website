import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

class PhotoTemplate extends Component {
  render() {
    const data = this.props.data;

    return (
      <div
        style={{ display: "block", width: "100%" }}
      >
        <Img alt={data.contentfulAsset.title} fluid={data.contentfulAsset.fluid}/>
      </div>
    );
  }
} 

export default PhotoTemplate;

export const photoQuery = graphql`
  query photoQuery($id: String!) {
    contentfulAsset(id: { eq: $id }) {
      fluid {
        ...GatsbyContentfulFluid
      }
      title
    }
  }
`;