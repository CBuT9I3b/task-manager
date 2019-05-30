import React, { Component } from 'react'

import { withTasks } from '../../containers'

import TaskEditMode from './TaskEditMode'

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
  }

  onToggleActive = event => {
    event.preventDefault();
    this.setState(state => ({
      isActive: !state.isActive
    }))
  };

  onCreateTask = (event, text, deadline) => {
    event.preventDefault();
    this.props.onCreateTask(text, deadline);
    this.onToggleActive(event)
  };

  render() {
    let { isActive } = this.state;

    return (
      isActive ?
        <TaskEditMode
          onSubmit={this.onCreateTask}
          onCancel={this.onToggleActive}
        /> :
        <button
          onClick={this.onToggleActive}
          className='btn-flat waves-effect waves-teal'
        ><i className='material-icons left'>add</i>New Task</button>
    )
  }
}

export default withTasks(AddTask)
