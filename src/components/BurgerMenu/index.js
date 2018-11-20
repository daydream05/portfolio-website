import React from 'react'
import BurgerIcon from './BurgerIcon'

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
    return <BurgerIcon isOpen={isOpen} onClick={this.handleClick}/>;
  }
}

export default BurgerMenu