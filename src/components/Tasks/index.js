import React from 'react'
import { connect } from 'react-redux'

import Tasks from './Tasks'

const TasksPage = ({ selectedTodo }) => (
  <React.Fragment>
    <h5>Tasks</h5>
    {
      selectedTodo ?
        <Tasks
          selectedTodoUid={selectedTodo.uid}
        /> :
        <p>
          You need to select or create and select To-Do List.
        </p>
    }
  </React.Fragment>
);

const mapDispatchToProps = ({ selectedTodo }) => ({
  selectedTodo
});

export default connect(mapDispatchToProps)(TasksPage)
