import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const PhotoTemplate = ({ data }) => (
  <Img alt={data.contentfulAsset.title} sizes={data.contentfulAsset.sizes}/>
);

export default PhotoTemplate;

export const photoQuery = graphql`
  query photoQuery($id: String!) {
    contentfulAsset(id: { eq: $id }) {
      sizes(maxWidth: 600) {
        ...GatsbyContentfulSizes
      }
      title
    }
  }
`;