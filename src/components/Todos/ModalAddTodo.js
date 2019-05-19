import React, { Component } from 'react'
import { createPortal } from 'react-dom'

import M from 'materialize-css'

import { withTodos } from '../../containers'

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
          className='modal'
        >
          <div className='modal-content'>
            <h6>Enter List Name</h6>
            <form onSubmit={event => this.onCreateTodo(event, text)}>
              <div className='input-field'>
                <i className='material-icons prefix'>create</i>
                <input
                  onChange={this.onChangeText}
                  value={text}
                  type='text'
                  id='new_todo'
                />
                <label htmlFor='new_todo'>To-Do List</label>
              </div>
              <button
                disabled={isInvalid}
                type='submit'
                className='btn-flat waves-effect waves-green'
              >Ok</button>
              <button
                onClick={this.onClose}
                className='btn-flat waves-effect waves-red'
              >Cancel</button>
            </form>
          </div>
        </div>,
        this.modalRoot
      )
    )
  };

  onOpen = () => {
    this.modal.open()
  };

  onClose = event => {
    this.modal.close();
    event.preventDefault()
  };

  onChangeText = event => {
    this.setState({ text: event.target.value })
  };

  onCreateTodo = (event, text) => {
    this.props.onCreateTodo(text);
    this.setState({ text: '' });
    this.onClose(event)
  };

  render() {
    return (
      <li>
        <a
          href='#!'
          onClick={this.onOpen}
          className='waves-effect waves-red'
        ><i className="material-icons">add</i>New List</a>
        {this.renderModal()}
      </li>
    )
  }
}

export default withTodos(ModalAddTodo)
