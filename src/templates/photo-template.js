import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const PhotoTemplate = ({ data }) => (
  <Img alt={data.contentfulAsset.title} resolutions={data.contentfulAsset.resolutions}/>
);

export default PhotoTemplate;

export const photoQuery = graphql`
  query photoQuery($id: String!) {
    contentfulAsset(id: { eq: $id }) {
      resolutions {
        ...GatsbyContentfulResolutions
      }
      title
    }
  }
`;