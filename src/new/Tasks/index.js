import React from 'react'

import { withTasks } from '../../containers'

import TasksList from './TasksList'
import AddTask from './AddTask'

const Tasks = ({ tasks, onRemoveTask }) => (
  <div>
    <h5>Tasks</h5>
    <TasksList
      tasks={tasks}
      onRemoveTask={onRemoveTask}
    />
    <AddTask />
  </div>
);

export default withTasks(Tasks)
