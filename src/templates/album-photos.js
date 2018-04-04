import React from 'react';
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
const AlbumTemplate = ({ data }) => {
  const albumName = data.contentfulPhotoAlbumDuplicate.albumName;
  const albumCover = data.contentfulPhotoAlbumDuplicate.albumCover.resolutions;
  const albumDescription = data.contentfulPhotoAlbumDuplicate.albumDescription.internal.content;
  const albumPhotos = data.contentfulPhotoAlbumDuplicate.albumPhotos || []

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
      <AlbumPhotoRow photos={photos} key={count}/>
    );
  }

  return (
    <AlbumTemplateContainer>
      <div style={{ overflow: 'auto' }}>
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

export default AlbumTemplate;

export const pageQuery = graphql`
  query PhotoQuery($id: String!) {
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
        title
        sizes(maxWidth: 293, maxHeight: 293) {
          ...GatsbyContentfulSizes
        }
        id
        description
      }
      id
    }
  }
`;