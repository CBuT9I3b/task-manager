import React, { Component } from 'react'

import { withTasks } from '../../containers'

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      text: ''
    }
  }

  onToggleActive = event => {
    this.setState({
      isActive: !this.state.isActive,
      text: ''
    });
    event.preventDefault()
  };

  onChangeText = event => {
    this.setState({ text: event.target.value })
  };

  onCreateTask = (event, text) => {
    this.props.onCreateTask(text);
    this.onToggleActive(event)
  };

  render() {
    let { text, isActive } = this.state;
    let isInvalid = text === '';

    return (
      isActive ?
        <form onSubmit={event => this.onCreateTask(event, text)}>
          <div className='row'>
            <div className='input-field col s12 m8 l8'>
              <i className='material-icons prefix'>create</i>
              <input
                onChange={this.onChangeText}
                value={text}
                id='add_task'
                type='text'
                className='validate'
              />
              <label htmlFor='add_task'>Task</label>
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
