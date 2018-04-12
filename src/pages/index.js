import React from 'react'
import Link from 'gatsby-link'
import './index.css';
import mixedLogo from './vp-logo-mixed.svg';
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
          <img src={mixedLogo} alt="Black and white VP Logo" className="black-logo" />
          <div className="nav-links">
            <Link to="/web/" className="nav-link white">web</Link>
            <span className="vertical-divider white">|</span>
            <Link to="/video/" className="nav-link white">video</Link>
            <span className="vertical-divider white">|</span>
            <Link to="/design/" className="nav-link">ux/ui</Link>
            <span className="vertical-divider">|</span>
            <Link to="/photo/" className="nav-link">photo</Link>
          </div>
        </div>
    </div>
  </div>
)

export default IndexPage;
