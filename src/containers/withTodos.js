import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withFirebase } from '../services'
import { setTodos, selectTodo } from '../actions'

const withTodos = Component => {
  class WithTodos extends React.Component {
    componentDidMount() {
      this.onListenerTodos(this.props.userUid)
    }

    componentWillMount() {
      this.props.firebase.todos().off();
      this.props.onSetTodos([]);
      this.props.onSelectTodo({ uid: null })
    }

    onListenerTodos = userUid => {
      this.props.firebase.todos()
        .orderByChild('user')
        .equalTo(userUid)
        .on('value', snapshot => (
          this.props.onSetTodos(snapshot.val())
        ))
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

    onSelectTodo = todo => {
      if (this.props.selectedTodo !== todo) {
        this.props.onSelectTodo(todo)
      }
    };

    render() {
      return <Component
        {...this.props}
        onCreateTodo={this.onCreateTodo}
        onRemoveTodo={this.onRemoveTodo}
        onSelectTodo={this.onSelectTodo}
      />
    }
  }

  const mapStateToProps = ({ userState, todosState, selectedTodo }) => {
    let { uid: userUid } = userState || null;
    let todos = todosState.todos || [];
    return { userUid, todos, selectedTodo }
  };

  const mapDispatchToProps = dispatch => ({
    onSetTodos: todos => {
      let listTodos = Object.keys(todos || []).map(key => ({
        ...todos[key],
        uid: key
      }));
      dispatch(setTodos(listTodos))
    },
    onSelectTodo: todo => dispatch(selectTodo(todo))
  });

  return compose(
    withFirebase,
    connect(mapStateToProps, mapDispatchToProps)
  )(WithTodos)
};

export default withTodos
