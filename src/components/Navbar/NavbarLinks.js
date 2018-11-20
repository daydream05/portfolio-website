import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'

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
    color: #404040;

    :visited {
      color: #404040;
    }
  }
`;

const NavbarLinks = () => (
    <RowList>
      <NavbarItem><Link to="/">HOME</Link></NavbarItem>
      <NavbarItem><Link to="/video/">VIDEOS</Link></NavbarItem>
      <NavbarItem><Link to="/blog/">BLOG</Link></NavbarItem>
    </RowList>
);

export default NavbarLinks;