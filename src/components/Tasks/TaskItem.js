import React from 'react'

const TaskItem = ({ task, onRemoveTask }) => (
  <li className='collection-item avatar'>
    {task.text}
    <br/>
    Date of creation: {new Date((task.dateOfCreation)).toLocaleString()}
    <a
      onClick={() => onRemoveTask(task)}
      href='#!'
      className='secondary-content'
    ><i className='material-icons'>delete</i></a>
  </li>
);

export default TaskItem
