import React from 'react';
import styled from 'styled-components';
import Album from '../Album/Album';
import Link from 'gatsby-link';
import slug from 'slug';

const FlexRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

const AlbumList = (props) => {
  console.log(props);
  return (
    <FlexRow>
      {props.albums.map((album) => {
        console.log(album);
        const albumDescription = album.node.albumDescription.internal.content;
        const albumName = album.node.albumName;
        const albumCover = album.node.albumCover.resolutions.src;
        const albumLink = album.node.fields.slug;
        return (
          <Link
            to={albumLink}
            key={album.node.id}
          >
            <Album description={albumDescription} image={albumCover} />
          </Link>
        );
      })}
    </FlexRow>
  );
}

export default AlbumList;