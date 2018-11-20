import React from 'react'

import Layout from '../../components/Layout'

import AlbumList from '../../components/photo/AlbumList/AlbumList'
import { Banner } from '../../components/Banner/Banner'

const PhotoPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
        <Banner title="Photos" />
       <AlbumList 
          albums={data.allContentfulPhotoAlbumDuplicate.edges}
       />
    </Layout>
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
            fluid {
              ...GatsbyContentfulFluid_withWebp
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