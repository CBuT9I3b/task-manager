import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withFirebase } from '../services'

const withTasks = Component => {
  class WithTasks extends React.Component {
    onCreateTask = text => {
      this.props.firebase.tasks().push({
        todo: this.props.selectedTodo.uid,
        text: text,
        dateOfCreation: this.props.firebase.serverValue,
        execution: false
      }).then(
        this.props.firebase.todo(this.props.selectedTodo.uid).update({
          quantityTasks: this.props.selectedTodo.quantityTasks + 1
        })
      )
    };

    onRemoveTask = task => {
      this.props.firebase.task(task.uid).remove()
        .then(
          this.props.firebase.todo(this.props.selectedTodo.uid).update({
            quantityTasks: this.props.selectedTodo.quantityTasks - 1
          })
        )
    };

    onEditTask = (task, text) => {
      this.props.firebase.task(task.uid).update({
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
    selectedTodo,
    tasks: todosState.tasks
  });

  return compose(
    withFirebase,
    connect(mapStateToProps)
  )(WithTasks)
};

export default withTasks
