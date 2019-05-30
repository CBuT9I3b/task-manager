import React from 'react'

import TaskMenu from './TaskMenu'

const TaskInfo = ({ task, onRemoveTask, onExecution, onToggleEditMode }) => (
  <li className='collection-item avatar'>
    <i
      onClick={() => onExecution(task)}
      className={task.done ? 'material-icons circle green' : 'material-icons circle red'}
      style={{ cursor: 'pointer' }}
    >
      {
        task.done && 'check'
      }
    </i>
    <span className='title'>{task.text}</span>
    <p>
      Created: {new Date((task.dateOfCreation)).toLocaleString()}
      <br/>
      {
        task.deadline && `Deadline: ${task.deadline}`
      }
    </p>
    <TaskMenu
      task={task}
      onToggleEditMode={onToggleEditMode}
      onRemoveTask={onRemoveTask}
    />
  </li>
);

export default TaskInfo
