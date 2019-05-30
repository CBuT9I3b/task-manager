import React from 'react'

import { withTasks } from '../../containers'

import TaskItem from './TaskItem'

const TasksList = ({ tasks, onRemoveTask, onExecution }) => (
  tasks.length ?
    <ul className='collection'>
      {tasks.map(task => (
        <TaskItem
          key={task.uid}
          task={task}
          onRemoveTask={onRemoveTask}
          onExecution={onExecution}
        />
      ))}
    </ul> :
    <p>This list is empty. Create the first task.</p>
);

export default withTasks(TasksList)
