import React from 'react'
import { PoseGroup } from 'react-pose'

import BurgerIcon from './BurgerIcon'
import SideBar from './SideBar'

class BurgerMenu extends React.Component {
  state = {
    isOpen: false
  };

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isOpen } = this.state;
    return (
    <div>
      <BurgerIcon isOpen={isOpen} onClick={this.handleClick}/>
      <PoseGroup enterPose="open" preEnterPose="initial" exitPose="initial" flipMove={false}>
        {isOpen && <SideBar isOpen={isOpen} key="sidebar" />}
      </PoseGroup>
    </div>
    )
  }
}

export default BurgerMenu