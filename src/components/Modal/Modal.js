import React, { Component } from "react";
import Modal from "react-modal";
import CaretRight from "react-icons/lib/fa/caret-right";
import CaretLeft from "react-icons/lib/fa/caret-left";
import Close from "react-icons/lib/md/close";
import findIndex from "lodash/findIndex";
import mousetrap from "mousetrap";
import PropTypes from "prop-types";
import { navigateTo } from "gatsby-link";

class PostsModal extends Component  {
  componentDidMount() {
    mousetrap.bind(`left`, () => this.previous());
    mousetrap.bind(`right`, () => this.next());
    mousetrap.bind(`spacebar`, () => this.next());
  }

  componentWillUnmount() {
    mousetrap.unbind(`left`);
    mousetrap.unbind(`right`);
    mousetrap.unbind(`spacebar`);
  }

  findCurrentIndex = () => {
    let index
    index = findIndex(
      this.props.posts,
      post => post.fields.slug === this.props.location.pathname
    )

    return index
  }

  next = (e) => {
    if(e) {
      e.stopPropagation();
    }
    const currentIndex = this.findCurrentIndex();
    if (currentIndex || currentIndex === 0) {
      const posts = this.props.posts
      let nextPost
      // Wrap around if at end.
      if (currentIndex + 1 === posts.length) {
        nextPost = posts[0]
      } else {
        nextPost = posts[currentIndex + 1]
      }
      navigateTo({
        pathname: `${nextPost.fields.slug}`,
        state: {
          isInModal: true,
        }
      });
    }
  }

  previous = (e) => {
    if (e) {
      e.stopPropagation();
    }

    const currentIndex = this.findCurrentIndex();
    if (currentIndex || currentIndex === 0) {
      const posts = this.props.posts;
      let previousPost;
      // Wrap around if at start.
      if (currentIndex === 0) {
        // returns the end of the array as the previouspost
        previousPost = posts.slice(-1)[0]
      } else {
        // goes to the previous slot on the array
        previousPost = posts[currentIndex - 1]
      }
      navigateTo({
        pathname: previousPost.fields.slug,
        state: {
          isInModal: true,
        },
      });
    }
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={() => navigateTo(`/photo/instagram-photos/`)}
        style={{
          overlay: {
            position: `fixed`,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: `rgba(0, 0, 0, 0.75)`,
          },
          content: {
            position: `absolute`,
            border: `none`,
            background: `none`,
            padding: 0,
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            overflow: `auto`,
            WebkitOverflowScrolling: `touch`,
          },
        }}
        contentLabel="Modal"
      >
        <div
          onClick={() => navigateTo(`/photo/instagram-photos/`)}
          style={{
            display: `flex`,
            position: `relative`,
            height: `100vh`,
          }}
        >
          <div
            style={{
              display: `flex`,
              alignItems: `center`,
              justifyItems: `center`,
              maxWidth: `975px`, // Gets it right around Instagram's maxWidth.
              margin: `auto`,
              width: `100%`,
            }}
          >
            <CaretLeft
              style={{
                cursor: `pointer`,
                fontSize: `50px`,
                color: `rgba(255,255,255,0.7)`,
                userSelect: `none`,
              }}
              onClick={e => this.previous(e)}
            />
            {this.props.children({
              location: { pathname: this.props.location.pathname },
            })}
            <CaretRight
              style={{
                cursor: `pointer`,
                fontSize: `50px`,
                color: `rgba(255,255,255,0.7)`,
                userSelect: `none`,
              }}
              onClick={e => this.next(e)}
            />
          </div>
          <Close
            onClick={() => navigateTo(`/photo/instagram-photos/`)}
            css={{
              cursor: `pointer`,
              color: `rgba(255,255,255,0.8)`,
              fontSize: `30px`,
              position: `absolute`,
            }}
          />
        </div>
      </Modal>
    )
  }
}

export default PostsModal;

export const postsModalFragment = graphql`
  fragment PostsModalFragment on ContentfulAsset {
    fields {
      slug
    }
  }
`;