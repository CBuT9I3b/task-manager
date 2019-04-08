import React from 'react'

import { withTasks } from '../../containers'

import TasksList from './TasksList'

const Tasks = ({ tasks, onRemoveTask }) => (
  <div>
    <h5>Tasks</h5>
    <TasksList
      tasks={tasks}
      onRemoveTask={onRemoveTask}
    />
  </div>
);

export default withTasks(Tasks)
