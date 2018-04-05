import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import normalize from 'normalize.css';
import Modal from '../components/Modal/Modal';

class TemplateWrapper extends Component {
  static childContextTypes = {
    setPosts: PropTypes.func,
  }

  getChildContext() {
    // We need this to be able to get posts in our child or grandchildren.
    // Any child of this parent would have access to setPosts through this.context.setPosts
    // setPosts allows us to access posts from our child or grandchildren
    return {
      setPosts: posts => {
        this.posts = posts;
        console.log('i added the post to the parent');
      },
    }
  }

  render() {
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
          {this.props.children()}
        </div>
        <div>
        </div>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
