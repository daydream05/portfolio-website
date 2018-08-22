import React from 'react';
import styled from 'styled-components';
import NavbarLinks from './NavbarLinks';
import { media } from '../../utils/media'

const NavContainer = styled.div`
  display: none;

  ${media.desktop`
    display: block;
  `}
`
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
  <NavContainer>
    <Nav>
      <NavbarLinks />
    </Nav>
  </NavContainer>
);

export default Navbar;