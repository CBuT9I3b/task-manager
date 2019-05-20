import React from 'react'

import { withTasks } from '../../containers'

import TaskItem from './TaskItem'

const TasksList = ({ tasks, onRemoveTask, onExecution }) => (
  <ul className='collection'>
    {tasks.length ?
      tasks.map(task => (
        <TaskItem
          key={task.uid}
          task={task}
          onRemoveTask={onRemoveTask}
          onExecution={onExecution}
        />)) :
      <li className='collection-item'>No Tasks</li>
    }
  </ul>
);

export default withTasks(TasksList)
