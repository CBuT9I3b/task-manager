import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withFirebase } from '../../services'
import { setTodos, selectTodo } from '../../actions'
import TodosList from './TodosList'

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  componentDidMount() {
    this.onListenerTodos(this.props.uid)
  }

  componentWillMount() {
    this.props.firebase.todos().off()
  }

  onListenerTodos = userUid => {
    this.props.firebase.todos()
      .orderByChild(userUid)
      .on('value', snapshot => (
        this.props.onSetTodos(snapshot.val())
      ))
  };

  onCreateTodo = (event, uid) => {
    this.props.firebase.todos().push({
      user: uid,
      text: this.state.text
    });
    this.setState({text: ''});
    event.preventDefault()
  };

  onRemoveTodo = uid => {
    this.props.firebase.todo(uid).remove()
  };

  onChangeText = event => {
    this.setState({text: event.target.value})
  };

  onSelectTodo = todo => {
    if (this.props.selectedTodo !== todo) {
      this.props.onSelectTodo(todo)
    }
  };

  render() {
    let { uid, todos } = this.props;
    let { text } = this.state;
    let IsInvalid = text === '';

    return (
      <div>
        <TodosList
          todos={todos}
          onRemoveTodo={this.onRemoveTodo}
          onSelectTodo={this.onSelectTodo}
        />
        <form onSubmit={event => this.onCreateTodo(event, uid)}>
          <div className='input-field'>
            <input
              id='new_todo'
              type='text'
              value={text}
              onChange={this.onChangeText}
              className='validate'
            />
            <label htmlFor='new_todo'>New Todo</label>
            <button
              className='btn-floating waves-effect waves-light'
              disabled={IsInvalid}
              type='submit'
            ><i className="material-icons">add</i></button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ userState, todosState, selectedTodo }) => {
  let { uid } = userState || null;
  let todos = todosState.todos || [];
  return { uid, todos, selectedTodo }
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

export default compose(
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(Todos)