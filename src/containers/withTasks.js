import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withFirebase } from '../services'

const withTasks = Component => {
  class WithTasks extends React.Component {
    onCreateTask = text => {
      this.props.firebase.tasks().push({
        todo: this.props.selectedTodoUid,
        text: text
      })
    };

    onRemoveTask = task => {
      this.props.firebase.task(task.uid).remove()
    };

    onEditTask = (task, text) => {
      this.props.firebase.task(task.uid).set({
        ...task,
        text
      })
    };

    render() {
      return <Component
        {...this.props}
        onCreateTask={this.onCreateTask}
        onRemoveTask={this.onRemoveTask}
        onEditTask={this.onEditTask}
      />
    }
  }

  const mapStateToProps = ({ selectedTodo, todosState }) => ({
    selectedTodoUid: selectedTodo && selectedTodo.uid,
    tasks: todosState.tasks
  });

  return compose(
    withFirebase,
    connect(mapStateToProps)
  )(WithTasks)
};

export default withTasks
