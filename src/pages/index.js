import React from 'react'
import Link from 'gatsby-link'
import './index.css';
import whiteLogo from './logo-white.svg'
import blackLogo from './logo-black.svg'
import vpLogo from './vp-logo.svg';

const IndexPage = () => (
  <div className="full-page">
    <div className="page-container">
      <div className="left-page">

      </div>
      <div className="right-page">
        <div className="right-page--container">
          <p className="right-page-paragraph">I'm currently under construction. You can come back later.</p>
          <img src={vpLogo} alt="alternate logo" className="alternate-logo" />
        </div>
        <div className="alternate-logo__block">
          
        </div>
      </div>
        <div className="fixed-logo">
          <img src={blackLogo} alt="Black Logo" className="black-logo" />
        </div>
        <div className="fixed-logo">
          <img src={whiteLogo} alt="White Logo" className="white-logo" />
        </div>
    </div>
  </div>
)

export default IndexPage;
