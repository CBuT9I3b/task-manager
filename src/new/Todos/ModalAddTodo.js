import React, { Component } from 'react'
import { createPortal } from 'react-dom'

import M from 'materialize-css'

const style = { maxWidth: '500px' };

class ModalAddTodo extends Component {
  constructor(props) {
    super(props);
    this.modalRef = null;
    this.createRoot();
    this.state = {
      text: ''
    }
  }

  componentDidMount() {
    M.Modal.init(this.modalRef);
    this.modal = M.Modal.getInstance(this.modalRef)
  }

  componentWillUnmount() {
    document.body.removeChild(this.modalRoot);
    this.modalRoot = null
  }

  createRoot = () => {
    this.modalRoot = document.createElement('div');
    document.body.appendChild(this.modalRoot)
  };

  getModalRef = modal => { this.modalRef = modal };

  renderModal = () => {
    let { text } = this.state;
    let isInvalid = text === '';

    return (
      this.modalRoot &&
      createPortal(
        <div
          ref={this.getModalRef}
          style={style}
          className='modal'
        >
          <div className='modal-content'>
            <h4>Enter List Title</h4>
            <form onSubmit={event => this.onCreateTodo(event, text)}>
              <div className='input-field'>
                <input
                  value={text}
                  onChange={this.onChangeText}
                  id='new_todo'
                  type='text'
                />
                <label htmlFor='new_todo'>List Title</label>
              </div>
            </form>
          </div>
          <div className='modal-footer'>
            <button
              onClick={this.onClose}
              className='btn-flat waves-effect waves-red'
            >Cancel</button>
            <button
              disabled={isInvalid}
              onClick={event => this.onCreateTodo(event, text)}
              className='btn-flat waves-effect waves-green'
            >Ok</button>
          </div>
        </div>,
        this.modalRoot
      )
    )
  };

  onOpen = () => this.modal.open();

  onClose = () => this.modal.close();

  onChangeText = event => this.setState({ text: event.target.value });

  onCreateTodo = (event, text) => {
    this.props.onCreateTodo(text);
    this.setState({ text: '' });
    this.onClose();
    event.preventDefault()
  };

  render() {
    return (
      <div>
        <button
          onClick={this.onOpen}
          className='btn waves-effect waves-light'
        >New List</button>
        {this.renderModal()}
      </div>
    )
  }
}

export default ModalAddTodo
