import React from 'react'
import Popup from 'reactjs-popup'
import styled from 'styled-components'

import BurgerIcon from './BurgerIcon'
import MenuSelection from './MenuSelection'

import { media } from '../../utils/media'

const MobileMenuContainer = styled.div`
  display: block;

  ${media.desktop`
    display: none;
  `}
`
const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none"
};

const MobileMenu = () => (
  <MobileMenuContainer>
    <Popup
      modal
      overlayStyle={{ background: "rgba(0,24,57,0.98)" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <BurgerIcon isOpen={open} />}
    >
      {close => <MenuSelection close={close} />} 
    </Popup>
  </MobileMenuContainer>
)

export default MobileMenu