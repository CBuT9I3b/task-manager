import React from 'react'

import { withTasks } from '../../containers'

import TaskItem from './TaskItem'

const TasksList = ({ tasks, onRemoveTask }) => (
  <ul className='collection'>
    {tasks.length ?
      tasks.map(task => (
        <TaskItem
          key={task.uid}
          task={task}
          onRemoveTask={onRemoveTask}
        />)) :
      <li className='collection-item'>No Tasks</li>
    }
  </ul>
);

export default withTasks(TasksList)
