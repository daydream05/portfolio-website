import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import 'normalize.css'

import theme from '../styles/theme'

import Logo from '../icons/white-logo-iv.svg'
import './Layout.css';
import BurgerMenu from '../components/BurgerMenu'


const WhiteLogo = styled(Logo)`
  position: fixed;
  z-index: 1;
  top: 40px;
  left: 80px;
  height: 48px;
  width: 48px;
`
const LayoutPage = styled.div`
  background-color: ${props => props.theme.colors.primaryBackground};
  color: ${props => props.theme.colors.white};
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
          <ThemeProvider theme={theme}>
            <LayoutPage>
              <WhiteLogo />
              <BurgerMenu />
              <div>
                {this.props.children}
              </div>
            </LayoutPage>
          </ThemeProvider>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      isInModal: PropTypes.bool,
    }),
  }),
}

export default TemplateWrapper
