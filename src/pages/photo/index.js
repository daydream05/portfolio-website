import React from 'react';
import Link from 'gatsby-link';
import AlbumList from '../../components/photo/AlbumList/AlbumList';

const PhotoPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>Hi this is the Photo page
      </h1>
      <p>Welcome to photo page</p>
      <Link to="/">Go back to home</Link>
       <AlbumList albums={data.allContentfulPhotoAlbumDuplicate.edges} />
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