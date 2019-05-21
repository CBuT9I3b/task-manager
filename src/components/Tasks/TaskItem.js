import React from 'react'

const TaskItem = ({ task, onRemoveTask, onExecution }) => (
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
    <a
      onClick={() => onRemoveTask(task)}
      href='#!'
      className='secondary-content'
    ><i className='material-icons'>delete</i></a>
  </li>
);

export default TaskItem
