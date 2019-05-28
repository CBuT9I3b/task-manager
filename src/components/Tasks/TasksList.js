import React from 'react'

import { withTasks } from '../../containers'

import TaskItem from './TaskItem'

const TasksList = ({ tasks, onRemoveTask, onExecution }) => (
  tasks.length ?
    tasks.map(task => (
      <ul className='collection'>
        <TaskItem
          key={task.uid}
          task={task}
          onRemoveTask={onRemoveTask}
          onExecution={onExecution}
        />
      </ul>
    )) :
    <p>This list is empty. Create the first task.</p>
);

export default withTasks(TasksList)
