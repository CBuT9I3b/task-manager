import React from 'react'

import { withTasks } from '../../containers'

import TasksList from './TasksList'
import AddTask from './AddTask'

const Tasks = ({ tasks, onCreateTask, onRemoveTask }) => (
  <div>
    <h5>Tasks</h5>
    <TasksList
      tasks={tasks}
      onRemoveTask={onRemoveTask}
    />
    <AddTask
      onCreateTask={onCreateTask}
    />
  </div>
);

export default withTasks(Tasks)
