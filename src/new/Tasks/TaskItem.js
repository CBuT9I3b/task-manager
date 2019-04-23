import React from 'react'

const TaskItem = ({ task, onRemoveTask }) => (
  <li className='collection-item'>
    <div>
      {task.text}
      <a
        onClick={() => onRemoveTask(task)}
        href='#!'
        className='secondary-content'
      ><i className='material-icons'>delete</i></a>
    </div>
  </li>
);

export default TaskItem
