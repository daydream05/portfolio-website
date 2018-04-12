import React from 'react';
import Link from 'gatsby-link';
import Modal from 'react-modal';

class SecondPage extends React.Component {
  state = {
    modalOpen: false,
  };

  openModal = () => {
    this.setState({ modalOpen: true });
  }

  render() {
    return (
        <div>
          <div style={{ height: '200vh'}}>
            <h1>Hi from the second page</h1>
            <p>Welcome to page 2</p>
            <Link to="/">Go back to the homepage</Link>
          </div>
          <div>
            <p>hey there</p>
            <button onClick={this.openModal}></button>
          </div>
          <Modal isOpen={this.state.modalOpen} posts={this.posts} location={this.props.location}>   
          </Modal>
        </div>
    )
  }
} 

export default SecondPage;
