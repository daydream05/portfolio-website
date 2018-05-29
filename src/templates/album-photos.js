import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import StackGrid from "react-stack-grid";
import Lightbox from 'react-images';
import styled from 'styled-components';
import AlbumPhoto from '../components/photo/AlbumPhoto/AlbumPhoto';

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
  constructor () {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });

    console.log(index, event);
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  gotoImage(index) {
    this.setState({
      currentImage: index,
    });
  }

  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }

  render() {
    const albumName = this.props.data.contentfulPhotoAlbumDuplicate.albumName;
    const albumCover = this.props.data.contentfulPhotoAlbumDuplicate.albumCover.resolutions;
    const albumDescription = this.props.data.contentfulPhotoAlbumDuplicate.albumDescription.internal.content;
    const albumPhotos = this.props.data.contentfulPhotoAlbumDuplicate.albumPhotos || []

    console.log(albumPhotos);

    const LIGHTBOXIMAGES = albumPhotos.map(photo => {
      return {
        src: photo.sizes.src,
        caption: photo.title,
        srcSet: photo.sizes.srcSet.split(','),
        alt: photo.title,
      }
    });

    console.log(LIGHTBOXIMAGES);

    return (
      <AlbumTemplateContainer>
        <div style={{ overflow: 'auto'}}>
          <h1>{albumName}</h1>
          <Img resolutions={albumCover} alt={albumName}/>
          <p>{albumDescription}</p>
        </div>
        <AlbumContainer>
          <AlbumColumn>
            <StackGrid
              columnWidth={293}
              columngutter={100}
            >
              {albumPhotos.map((photo, index) => {
                return(
                  <AlbumPhoto key={index} photo={photo} onClick={(e) => this.openLightbox(index, e)}/>
                )
              })}
            </StackGrid>
            <Lightbox
                currentImage={this.state.currentImage}
                images={LIGHTBOXIMAGES}
                isOpen={this.state.lightboxIsOpen}
                onClickImage={this.handleClickImage}
                onClickNext={this.gotoNext}
                onClickPrev={this.gotoPrevious}
                onClickThumbnail={this.gotoImage}
                onClose={this.closeLightbox}
                preventScroll={true}
                showThumbnails={true}
            />
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