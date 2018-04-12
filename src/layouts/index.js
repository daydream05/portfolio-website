import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import normalize from 'normalize.css';
import Modal from '../components/Modal/Modal';
import Navbar from '../components/Navbar/Navbar';

class TemplateWrapper extends Component {
  static childContextTypes = {
    setPosts: PropTypes.func,
  }

  constructor(props) {
    super(props);

    if (props.location.state) {
      // if we want a page to be in a modal, we can specify the location's
      // state to be in a modal. We can do do this through location object
      // that is passed down to a Gatsby Link or navigateTo. 
      this.inModal = props.location.state.isInModal
    }
  }

  getChildContext() {
    // We need this to be able to get posts in our child or grandchildren.
    // Any child of this parent would have access to setPosts through this.context.setPosts
    // setPosts allows us to access posts from our child or grandchildren
    return {
      setPosts: posts => {
        this.posts = posts;
      },
    }
  }

  componentDidMount() {
    // Create references to html/body elements
    this.htmlElement = document.querySelector(`html`);
    this.bodyElement = document.querySelector(`body`);

    // Cache the window width.
    this.windowWidth = window.innerWidth;
  }

  componentWillUpdate(nextProps) {
    
    if (nextProps.location.state) {

      if (
        nextProps.location.state.isInModal &&
        this.windowWidth > 750
      ) 
      {
        console.log('hello world');
      // Freeze the background from scrolling.
        this.htmlElement.style.overflow = `hidden`
        this.bodyElement.style.overflow = `hidden`

        // Always set overflow-y to scroll so the scrollbar stays visible avoiding
        // weird jumping.
        this.htmlElement.style.overflowY = `scroll`;
      } else {
        // Otherwise we're navigating back home so delete old home so the
        // modal can be destroyed.
        console.log(this.modalBackgroundChildren);
        delete this.modalBackgroundChildren
        this.htmlElement.style.overflow = `visible`
        this.bodyElement.style.overflow = `visible`

        // Always set overflow-y to scroll so the scrollbar stays visible avoiding
        // weird jumping.
        this.htmlElement.style.overflowY = `scroll`;
      }
    }
  }

  render() {
    let isModal = false

    if (this.props.location.state) {
      if (
        this.props.location.state.isInModal  &&
        this.windowWidth > 750
      ) {
        isModal = true;
      }
    }

    return (
      <div>
        <Helmet
          title="Vince Parulan, Porfolio Website"
          meta={[
            { name: 'description', content: "This is my portfolio website and it's currently under construction" },
            { name: 'keywords', content: 'portfolio, projects' },
          ]}
        />
        <Helmet>
          <link rel="stylesheet" href="https://use.typekit.net/sbz7hal.css" />
        </Helmet>
        <div>
          <Navbar />
          {
            // If the modal is turned on, we want to show the background
            // which is the children of this layout to be the parent of where the pictures come from
            isModal
            ? this.props.children({
                ...this.props,
                location: { pathname: `/photo/instagram-photos/` },
              })
            : this.props.children()}
        </div>
        <div>
          {isModal && (
            <Modal isOpen={true} posts={this.posts} location={this.props.location}>
              {this.props.children}
            </Modal>
          )}
        </div>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  location: PropTypes.shape({
    state: PropTypes.shape({
      isInModal: PropTypes.bool,
    }),
  }),
}

export default TemplateWrapper
