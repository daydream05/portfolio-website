import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import AlbumPhotoRow from '../components/photo/AlbumPhotoRow/AlbumPhotoRow';
import styled from 'styled-components';

const AlbumTemplateContainer = styled.div`
  max-width: 935px;
  margin-left: auto;
  margin-right: auto;
`;
const AlbumColumn = styled.div`
  display: block;
  width: 100%;
`;

const AlbumContainer = styled.div`
  display: flex;
  justify-content: center;
`;
class AlbumTemplate extends Component {
  static contextTypes = {
    setPosts: PropTypes.func,
  }

  constructor(props, context) {
    super();
    // We're adding the photos to the parent in `layouts/index.js`
    context.setPosts(props.data.contentfulPhotoAlbumDuplicate.albumPhotos || []);
  }

  render() {
    const albumName = this.props.data.contentfulPhotoAlbumDuplicate.albumName;
    const albumCover = this.props.data.contentfulPhotoAlbumDuplicate.albumCover.resolutions;
    const albumDescription = this.props.data.contentfulPhotoAlbumDuplicate.albumDescription.internal.content;
    const albumPhotos = this.props.data.contentfulPhotoAlbumDuplicate.albumPhotos || []

    const displayPhotos = () => {
      const photoArray = [];
      let photoRow = [];
      let count = 0;

      albumPhotos.map( photo => {
      // makes sure we're only adding picture that exists
        if (photo.sizes) {
          photoArray.push( photo);
        }
      });

      return (
        photoArray.map( photo => {
          if (photoRow.length === 3) {
            photoRow = [];
          } 

          photoRow.push(photo);
          count += 1;

          if (photoRow.length === 3) {
            return returnRow(photoRow, count);
          } else if (photoArray.length - count === 0) {
            return returnRow(photoRow, count);
          }
        })
      );
    }

    const returnRow = (photos, count) => {
      console.log(photos, count);
      return (
        <AlbumPhotoRow photos={photos} key={count} parentUrl={this.props.location.pathname}/>
      );
    }

    return (
      <AlbumTemplateContainer>
        <div style={{ overflow: 'auto'}}>
          <h1>{albumName}</h1>
          <Img resolutions={albumCover} alt={albumName}/>
          <p>{albumDescription}</p>
        </div>
        <AlbumContainer>
          <AlbumColumn>
            { displayPhotos()}
          </AlbumColumn>
        </AlbumContainer>
      </AlbumTemplateContainer>
    )
  }
}

export default AlbumTemplate;

export const pageQuery = graphql`
  query AlbumPhotosQuery($id: String!) {
    contentfulPhotoAlbumDuplicate(id: { eq: $id }) {
      albumName
      albumCover {
        resolutions(width: 293, height: 293) {
          ...GatsbyContentfulResolutions
        }
      }
      albumDescription {
        internal {
          content
        }
        id
      }
      albumPhotos {
        ...AlbumPhotoFragment
      }
      id
    }
  }
`;