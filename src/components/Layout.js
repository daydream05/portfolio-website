import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import normalize from 'normalize.css';
import Navbar from '../components/Navbar/Navbar';
import './Layout.css';
import MobileMenu from '../components/MobileMenu/MobileMenu';



const LayoutPage = styled.div`
  overflow: hidden;
`;

// So our page is always below our nav
const PageContent = styled.div`
  margin-top: 50px;
`;

class TemplateWrapper extends Component {
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
        <LayoutPage>
          <Navbar />
          <MobileMenu />
          <PageContent>
            {this.props.children}
          </PageContent>
        </LayoutPage>
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
