import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import { Route, NavLink } from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.js'

import { SignIn, SignUp } from '..'

class ModalSignIn extends Component {
  constructor(props) {
    super(props);
    this.modalRef = null;
    this.createRoot();
    this.state = {
      isOpen: false
    }
  }

  componentDidMount() {
    M.Modal.init(this.modalRef, { dismissible: false });
    this.modal = M.Modal.getInstance(this.modalRef);
    if (this.state.isOpen) {
      this.modal.open()
    } else {
      this.modal.close()
    }
  }

  componentWillUnmount() {
    document.body.removeChild(this.modalRoot);
    this.modalRoot = null
  }

  componentDidUpdate() {
    if (this.state.isOpen) {
      this.modal.open()
    } else {
      this.modal.close()
    }
  }

  createRoot = () => {
    this.modalRoot = document.createElement('div');
    document.body.appendChild(this.modalRoot)
  };

  getModalRef = modal => { this.modalRef = modal };

  renderModal = () => (
    this.modalRoot &&
      createPortal(
        <div
          ref={this.getModalRef}
          className='modal'
        >
          <div className='modal-content'>
            <Route path='/sign_in' component={() => <SignIn onClose={this.onClose}/>} />
            <Route path='/sign_up' component={() => <SignUp onClose={this.onClose}/>} />
          </div>
        </div>,
        this.modalRoot
      )
  );

  onOpen = () => this.setState({ isOpen: true });

  onClose = () => this.setState({ isOpen: false });

  render() {
    return (
      <div>
        <NavLink
          to='/sign_in'
          onClick={this.onOpen}
        >Sign In</NavLink>
        {this.renderModal()}
      </div>
    )
  }
}

export default ModalSignIn
