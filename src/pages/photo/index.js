import React from 'react';
import AlbumList from '../../components/photo/AlbumList/AlbumList';
import { Banner } from '../../components/Banner/Banner';

const PhotoPage = ({ data }) => {
  console.log(data);
  return (
    <div>
        <Banner title="Photos" />
       <AlbumList 
          albums={data.allContentfulPhotoAlbumDuplicate.edges}
       />
    </div>
  );
}

export default PhotoPage;

export const albumQuery = graphql`
  query AlbumQuery {
    allContentfulPhotoAlbumDuplicate {
      edges {
        node {
          albumName
          albumCover {
            resolutions {
              width
              height
              src
              srcSet
            }
          }
          albumDescription {
            internal {
              content
            }
            id
          }
          fields {
            slug
          }
          id
        }
      }
    }
  }
`;