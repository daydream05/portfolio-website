import React from "react";
import styled from "styled-components"

const BurgerContainer = styled.div`
  display: inline-block;
  cursor: pointer;
  position: fixed;
  right: 20px;
  bottom: 40px;
  z-index: 9999;
  background: #fff;
  padding: 10px;
  border-radius: 25px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
`

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: #404040;
  margin: 4px 0;
  transition: 0.4s;
`

const Bar1 = styled(Bar)`
  ${props => props.isOpen ?
    `
      transform: rotate(-45deg) translate(-4px, 4px);
    `
    : null
    }
`

const Bar2 = styled(Bar)`
    ${props => props.isOpen ?
      `
        transform: none;
        opacity: 0;
      `
    : null}
`
const Bar3 = styled(Bar)`
  ${props => props.isOpen ?
    `
      transform: rotate(45deg) translate(-6px, -6px);
    `
    : null}
`

const BurgerIcon = ({ isOpen, ...props}) => {
  return (
    <BurgerContainer {...props}>
      <Bar1 key="b1" isOpen={isOpen}/>
      <Bar2 key="b2" isOpen={isOpen}/>
      <Bar3 key="b3" isOpen={isOpen}/>
    </BurgerContainer>
  );
}

export default BurgerIcon
