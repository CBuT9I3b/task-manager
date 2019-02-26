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

  onCreateTodo = (event, userUid) => {
    this.props.firebase.todos().push({
      user: userUid,
      text: this.state.text
    });
    this.setState({text: ''});
    event.preventDefault()
  };

  onRemoveTodo = todoUid => {
    this.props.firebase.todo(todoUid).remove()
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
    let { userUid, todos, selectedTodo } = this.props;
    let { text } = this.state;
    let isInvalid = text === '';

    return (
      <div>
        <TodosList
          todos={todos}
          selectedTodo={selectedTodo}
          onRemoveTodo={this.onRemoveTodo}
          onSelectTodo={this.onSelectTodo}
        />
        <form onSubmit={event => this.onCreateTodo(event, userUid)}>
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
              disabled={isInvalid}
              type='submit'
            ><i className="material-icons">add</i></button>
          </div>
        </form>
      </div>
    )
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

export default compose(
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(Todos)
