import React from 'react'

const TaskItem = ({ task, onRemoveTask }) => (
  <li className='collection-item'>
    <div>
      {task.text}
      <a
        href='#!'
        className='secondary-content'
        onClick={() => onRemoveTask(task)}
      ><i className='material-icons'>delete</i></a>
    </div>
  </li>
);

export default TaskItem
