import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withFirebase } from '../../services'
import { setTodos } from '../../actions'

class Todos extends Component {
  constructor(props) {
    super(props)
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

  onListenerTodos = user => {
    this.props.firebase.todos()
      .orderByChild(user)
      .on('value', snapshot => (
        this.props.onSetTodos(snapshot.val())
      ))
  }

  onCreateTodo = (event, uid) => {
    this.props.firebase.todos().push({
      user: uid,
      text: this.state.text
    })
    this.setState({text: ''})
    event.preventDefault()
  }

  onRemoveTodo = uid => {
    this.props.firebase.todos(uid).remove()
  }

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  render() {
    let { uid, todos } = this.props
    let { text } = this.state
    let IsInvalid = text === ''

    return (
      <div>
        {todos ?
          todos.map(todo => <p key={todo.uid}>{todo.text}</p>) :
          <p>No List</p>
        }
        <form onSubmit={event => this.onCreateTodo(event, uid)}>
          <input
            type='text'
            value={text}
            onChange={this.onChangeText}
          />
          <button
            className='btn-floating waves-effect waves-light'
            disabled={IsInvalid}
            type='submit'
          ><i class="material-icons">add</i></button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ userState, todosState }) => {
  let { uid } = userState || null
  let todos = Object.keys(todosState.todos || []).map(
    key => ({
      ...todosState.todos[key],
      uid: key
    })
  )
  return { uid, todos }
}

const mapDispatchToProps = dispatch => ({
  onSetTodos: todos => dispatch(setTodos(todos))
})

export default compose(
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(Todos)
