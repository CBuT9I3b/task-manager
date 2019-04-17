import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withFirebase } from '../services'
import { selectTodo } from '../actions'

const withTodos = Component => {
  class WithTodos extends React.Component {
    onSelectTodo = todo => {
      if (this.props.selectedTodo !== todo) {
        this.props.onSelectTodo(todo)
      }
    };

    onCreateTodo = text => {
      this.props.firebase.todos().push({
        user: this.props.userUid,
        text: text
      })
    };

    onRemoveTodo = todoUid => {
      this.props.firebase.todo(todoUid).remove();
      let tasksRef = this.props.firebase.tasks();
      tasksRef.orderByChild('todo')
        .equalTo(todoUid)
        .once('value', snapshot => {
          let updates = {};
          snapshot.forEach(task => updates[task.key] = null);
          tasksRef.update(updates)
        })
    };

    render() {
      return <Component
        todos={this.props.todos}
        selectedTodo={this.props.selectedTodo}
        onSelectTodo={this.onSelectTodo}
        onCreateTodo={this.onCreateTodo}
        onRemoveTodo={this.onRemoveTodo}
      />
    }
  }

  const mapStateToProps = ({ userState, todosState, selectedTodo }) => {
    let { uid: userUid } = userState || null;
    let todos = todosState.todos || [];
    return { userUid, todos, selectedTodo }
  };

  const mapDispatchToProps = dispatch => ({
    onSelectTodo: todo => dispatch(selectTodo(todo))
  });

  return compose(
    withFirebase,
    connect(mapStateToProps, mapDispatchToProps)
  )(WithTodos)
};

export default withTodos
