import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Link from "gatsby-link";
import styled from 'styled-components';
import HeartIcon from "react-icons/lib/fa/heart";

const StyledImg = styled(Img)`
  & {
    display: block;
  }
`;

let touched = false;

class AlbumPhoto extends Component {
  constructor() {
    super()
    this.state = {
      hovering: false,
    }
  }

  render() {
    const {
      sizes,
      title,
      fields,
    } = this.props.photo;

    const { slug } = fields;
    return (
      <Link
        style = {{
          display: `block`,
          flex: `100%`,
          width: `100%`,
          maxWidth: 293,
          position: `relative`,
        }}
        to={{ pathname: slug }}
        onTouchStart={() => (touched = true)}
        onMouseEnter={() => {
          if (!touched) {
            this.setState({ hovering: true })
          }
        }}
        onMouseLeave={() => {
          if (!touched) {
            this.setState({ hovering: false })
          }
        }}
      >
        <div
          style={{
            flexDirection: `column`,
            flexShrink: 0,
            position: `relative`,
            overflow: `hidden`,
          }}
        >
          <StyledImg
            sizes={sizes} 
            alt={title} 
          />
        </div>
        {/* overlay */}
        {this.state.hovering && (
          <div
            style={{
              position: `absolute`,
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: `rgba(0,0,0,0.3)`,
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
              color: `white`,
            }}
          >
          </div>
        )}
      </Link>
    );
  }
}

AlbumPhoto.propTypes = {
  photo: PropTypes.shape({
    title: PropTypes.string,
    sizes: PropTypes.shape({
      base64: PropTypes.string,
      aspectRatio: PropTypes.integer,
      src: PropTypes.string,
      srcSet: PropTypes.string,
      sizes: PropTypes.string,
      }).isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string,
    })
  }).isRequired,
}

export default AlbumPhoto;

export const albumPhotoFragment = graphql`
  fragment AlbumPhotoFragment on ContentfulAsset {
    sizes(maxWidth: 293, maxHeight: 293) {
      ...GatsbyContentfulSizes
    }
    fields {
      slug
    }
    id
    description
    title
  }
`;