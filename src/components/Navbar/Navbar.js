import React from 'react';
import styled from 'styled-components';
import NavbarLinks from './NavbarLinks';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 1;
  background-color: white;
  height: 50px;
`;

const Navbar = () => (
  <Nav>
    <NavbarLinks />
  </Nav>
);

export default Navbar;