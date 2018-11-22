import React from "react";
import styled from "styled-components";
import posed from "react-pose";

import { Link } from '../StyledComponents'

import { media } from '../../utils/media'

const animateItem = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 400,
      delay: 450
    }
  },
  initial: {
    x: "-24px",
    opacity: 0,
    transition: {
      duration: 400,
      delay: 0
    }
  }
};

const fadeIn = {
  initial: {
    opacity: 0,
    transition: {
      duration: 300,
    },
    staggerChildren: 50,
    staggerDirection: -1,
  },
  open: {
    opacity: 1,
    transition: {
      duration: 400,
    },
    staggerChildren: 150,
  },
}

const SidePanel = styled(posed.div(fadeIn))`
  height: 100vh;
  right: 0;
  top: 0;
  width: ${props => props.panelWidth || `100%`};
  background-color: ${props => props.theme.colors.primaryBackground};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Item = styled(posed.li(animateItem))`
  margin-bottom: 1rem;
`;

const ItemLink = styled(Link)`
  color: white;
  font-size: 48px;
  font-weight: bold;
  cursor: pointer;
  text-align: right;
`;

const MenuList = styled.ul`
  margin: none;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${media.desktop`
    width: ${props => props.theme.sizes.maxWidth};
  `}
`;

const SideBar = props => {
  const { isOpen } = props;
  return (
    <SidePanel
      pose={isOpen
        ? "open"
        : "closed"}
      panelWidth={props.panelWidth}
      {...props}
      ref={props.hostRef}>
      <MenuList>
        <Item>
          <ItemLink to="/">Home</ItemLink>
        </Item>
        <Item>
          <ItemLink to="/video/">Videos</ItemLink>
        </Item>
      </MenuList>
    </SidePanel>
  );
};

export default SideBar;
