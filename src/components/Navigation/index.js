import React from 'react';
import Link from 'gatsby-link';

const Navigation = () => (
  <div className="navigation-container">
    <ul>
      <li><Link to="/">developer</Link></li>
      <li><Link to="/">videographer</Link></li>
      <li><Link to="/">designer</Link></li>
      <li><Link to="/">photographer</Link></li>
    </ul>
  </div>
)

export default Navigation;