import React from 'react';
import styled from 'styled-components';
import NavbarLinks from './NavbarLinks';

const Nav = styled.nav`
  width: 100%;
  position: absolute;
`;

const Navbar = () => (
  <Nav>
    <NavbarLinks />
  </Nav>
);

export default Navbar;