import React, { Component } from 'react'

import TaskInfo from './TaskInfo'
import TaskEditMode from './TaskEditMode'

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    }
  }

  onToggleEditMode = event => {
    event.preventDefault();
    this.setState(state => ({
      editMode: !state.editMode
    }))
  };

  onEditTask = (event, text, deadline) => {
    event.preventDefault();
    this.props.onEditTask(this.props.task, text, deadline);
    this.onToggleEditMode(event)
  };

  render() {
    let { task, onRemoveTask, onExecution } = this.props;
    let { editMode } = this.state;

    return (
      editMode ?
        <li className='collection-item grey lighten-3'>
          <TaskEditMode
            task={task}
            onSubmit={this.onEditTask}
            onCancel={this.onToggleEditMode}
          />
        </li> :
        <TaskInfo
          task={task}
          onRemoveTask={onRemoveTask}
          onExecution={onExecution}
          onToggleEditMode={this.onToggleEditMode}
        />
    )
  }
}

export default TaskItem
