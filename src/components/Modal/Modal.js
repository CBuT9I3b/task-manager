import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.js'

import { SignIn, SignUp } from '..'

class Modal extends Component {
  constructor(props) {
    super(props);
    this.modalRef = null;
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

  componentDidUpdate() {
    if (this.state.isOpen) {
      this.modal.open()
    } else {
      this.modal.close()
    }
  }

  getModalRef = modal => { this.modalRef = modal };

  onOpen = () => this.setState({ isOpen: true });

  onClose = () => this.setState({ isOpen: false });

  render() {
    let { isOpen } = this.state;
    return (
      <div>
        <button
          onClick={this.onOpen}
          className='btn waves-effect waves-light'
        >Modal Open Button</button>
        <div
          ref={this.getModalRef}
          className='modal'
        >
          {isOpen &&
            <div className='modal-content'>
              <Route to='/sign_in' component={() => <SignIn onClose={this.onClose}/>} />
              <Route to='/sign_up' component={() => <SignUp onClose={this.onClose}/>} />
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Modal
