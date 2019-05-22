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
      <React.Fragment>
        <TodosList />
        <ModalAddTodo />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ userState }) => ({
  userUid: userState && userState.uid
});

export default compose(
  withFirebase,
  connect(mapStateToProps)
)(Todos)
