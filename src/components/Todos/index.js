import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withFirebase } from '../../services'
import { setTodosAndSelectedTodo } from '../../actions'

import TodosList from './TodosList'
import ModalAddTodo from './ModalAddTodo'

class Todos extends Component {
  componentDidMount() {
    this.onListenerTodos(this.props.userUid)
  }

  componentWillUnmount() {
    this.props.firebase.todos().off()
  }

  onListenerTodos = userUid => {
    this.props.firebase.todos()
      .orderByChild('user')
      .equalTo(userUid)
      .on('value', snapshot => (
        this.props.dispatch(setTodosAndSelectedTodo(snapshot.val()))
      ))
  };

  render() {
    return (
      <div>
        <TodosList />
        <ModalAddTodo />
      </div>
    );
  }
}

const mapStateToProps = ({ userState }) => ({
  userUid: userState && userState.uid
});

// const mapDispatchToProps = dispatch => ({
//   onSetTodos: todos => {
//     let listTodos = Object.keys(todos || []).map(key => ({
//       ...todos[key],
//       uid: key
//     }));
//     dispatch(setTodos(listTodos))
//   }
// });

export default compose(
  withFirebase,
  connect(mapStateToProps)
)(Todos)
