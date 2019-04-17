import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withFirebase } from '../services'

const withTasks = Component => {
  class WithTasks extends React.Component {
    onCreateTask = text => {
      this.props.firebase.tasks().push({
        todo: this.props.todoUid,
        text: text
      })
    };

    onRemoveTask = taskUid => {
      this.props.firebase.task(taskUid).remove()
    };

    onEditTask = (task, text) => {
      this.props.firebase.task(task.uid).set({
        ...task,
        text
      })
    };

    render() {
      return <Component
        tasks={this.props.tasks}
        onCreateTask={this.onCreateTask}
        onRemoveTask={this.onRemoveTask}
        onEditTask={this.onEditTask}
      />
    }
  }

  const mapStateToProps = ({ selectedTodo, todosState }) => {
    let { uid: todoUid } = selectedTodo || null;
    let tasks = todosState.tasks || [];
    return { todoUid, tasks }
  };

  return compose(
    withFirebase,
    connect(mapStateToProps)
  )(WithTasks)
};

export default withTasks
