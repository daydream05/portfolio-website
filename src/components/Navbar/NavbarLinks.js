import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const RowList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const NavbarItem = styled.li`
  list-style-type: none;
  color: #979797;
  margin: 0;

  a {
    font-weight: 700;
    text-decoration: none;

    :visited {
      color: inherit;
    }
  }
`;

const NavbarLinks = () => (
    <RowList>
      <NavbarItem><Link to="/">HOME</Link></NavbarItem>
      <NavbarItem><Link to="/design/">DESIGN</Link></NavbarItem>
      <NavbarItem><Link to="/photo/">PHOTOS</Link></NavbarItem>
      <NavbarItem><Link to="/web/">WEB</Link></NavbarItem>
      <NavbarItem><Link to="/video/">VIDEOS</Link></NavbarItem>
      <NavbarItem><Link to="/blog/">BLOG</Link></NavbarItem>
      <NavbarItem><Link to="/about/">ABOUT</Link></NavbarItem>
    </RowList>
);

export default NavbarLinks;