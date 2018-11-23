import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import posed, { PoseGroup } from 'react-pose'

import styled, { ThemeProvider } from 'styled-components';
import 'normalize.css'

import theme from '../styles/theme'

import Logo from '../icons/white-logo-iv.svg'
import './Layout.css';
import BurgerMenu from '../components/BurgerMenu'

import { Link } from '../components/StyledComponents'
import Footer from './Footer'

import { media } from '../utils/media'

const WhiteLogo = styled(Logo)`
  position: absolute;
  z-index: 1;
  top: 40px;
  left: 20px;
  height: 48px;
  width: 48px;

  ${media.desktop`
    left: 80px;
  `}
`

const PageTransition = posed.div({
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 400,
    }
  },
  exit: {
    opacity: 0,
    y: '30px'
  }
})

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
            <link rel="stylesheet" href="https://use.typekit.net/lrv4dvj.css" />
          </Helmet>
          <ThemeProvider theme={theme}>
            <LayoutPage>
              <Link to="/">
                <WhiteLogo />
              </Link>
              <BurgerMenu />
              <PoseGroup animateOnMount>
                <PageTransition key="fadeup">
                  <div>
                    {this.props.children}
                  </div>
                </PageTransition>
              </PoseGroup>
              <Footer />
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
