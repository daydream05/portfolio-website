import React from "react";
import { Link as GatsbyLink } from 'gatsby'
import styled from "styled-components"

const Link = styled(GatsbyLink)`
  color: #fff;
  text-decoration: none;
`
const Menu = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  padding: 0px;
`

const MenuList = styled.ul`
  position: relative;
  top: 0px;
  font-size: 24px;
  font-weight: 500;
  padding: 0px;
`

const MenuItem = styled.li`
  list-style: outside none none;
  margin: 3rem 0px;
  padding: 0;
  cursor: pointer;
  color: #fff;

  :hover {
    color: #404040;
  }
`

const MenuSelection = ({ close }) => (
  <Menu>
    <MenuList>
      <MenuItem onClick={close}>
        <Link to="/" >Home</Link>
      </MenuItem>
      <MenuItem onClick={close}>
        <Link to="/video/">Videos</Link>
      </MenuItem> 
      <MenuItem onClick={close}>
        <Link to="/blog/">Blog</Link>
      </MenuItem>
    </MenuList>
  </Menu>
)

export default MenuSelection