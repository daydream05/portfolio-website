import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AlbumPhoto from '../AlbumPhoto/AlbumPhoto';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 0;
  margin-bottom: 0.5em;

  > * {
    margin-right: 0.5em;
  }
  > *:last-child {
    margin-right: 0;
  }
`;
const AlbumPhotoRow = (props) => (
  <Row>
    {props.photos.map(photo => {
      return (
      <AlbumPhoto key={photo.id} photo={photo} parentUrl={props.parentUrl}/>
      );
    })}
  </Row>
);

export default AlbumPhotoRow;

AlbumPhotoRow.propTypes = {
  photos: PropTypes.array.isRequired,
}