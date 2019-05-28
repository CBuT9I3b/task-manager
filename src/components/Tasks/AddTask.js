import React, { Component } from 'react'

import M from 'materialize-css'

import { withTasks } from '../../containers'

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      text: '',
      deadline: null
    }
  }

  componentDidUpdate() {
    if (this.state.isActive) {
      this.datepicker = M.Datepicker.init(this._datepicker, {
        format: 'dd.mm.yyyy',
        onClose: this.onChangeDate
      })
    } else if (this.datepicker) {
      this.datepicker.destroy()
    }
  }

  componentWillUnmount() {
    this.datepicker && this.datepicker.destroy()
  }

  onToggleActive = event => {
    event.preventDefault();
    this.setState({
      isActive: !this.state.isActive,
      text: '',
      deadline: null
    })
  };

  onChangeText = event => {
    this.setState({ text: event.target.value })
  };

  onChangeDate = () => {
    this.setState({ deadline: this.datepicker.toString() })
  };

  onCreateTask = (event, text, deadline) => {
    event.preventDefault();
    this.props.onCreateTask(text, deadline);
    this.onToggleActive(event)
  };

  render() {
    let { isActive, text, deadline } = this.state;
    let isInvalid = text === '';

    return (
      isActive ?
        <form onSubmit={event => this.onCreateTask(event, text, deadline)}>
          <div className='row'>
            <div className='input-field col s12 m6 l6'>
              <i className='material-icons prefix'>create</i>
              <input
                onChange={this.onChangeText}
                value={text}
                name='text'
                id='add_task'
                type='text'
                className='validate'
              />
              <label htmlFor='add_task'>Task</label>
            </div>
            <div className='input-field col s12 m6 l6'>
              <i className='material-icons prefix'>date_range</i>
              <input
                ref={input => { this._datepicker = input }}
                id='deadline'
                type='text'
                className='datepicker'
              />
              <label htmlFor='deadline'>Deadline</label>
            </div>
          </div>
          <button
            disabled={isInvalid}
            type='submit'
            className='btn-flat waves-effect waves-green'
          >Ok</button>
          <button
            onClick={this.onToggleActive}
            className='btn-flat waves-effect waves-red'
          >Cancel</button>
        </form> :
        <button
          onClick={this.onToggleActive}
          className='btn-flat waves-effect waves-teal'
        ><i className='material-icons left'>add</i>New Task</button>
    )
  }
}

export default withTasks(AddTask)
