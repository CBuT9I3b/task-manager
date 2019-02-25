import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withFirebase } from '../../services'
import { setTasks } from '../../actions'
import TasksList from './TasksList'

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  componentDidMount() {
    if (this.props.todoUid) {
      this.onListenerTasks(this.props.todoUid)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.todoUid !== prevProps.todoUid) {
      this.onListenerTasks(this.props.todoUid)
    }
  }

  componentWillUnmount() {
    this.props.firebase.tasks().off();
    this.props.onSetTasks([])
  }

  onListenerTasks = todoUid => {
    this.props.firebase.tasks()
      .orderByChild('todo')
      .equalTo(todoUid)
      .on('value', snapshot => {
        this.props.onSetTasks(snapshot.val())
      })
  };

  onCreateTask = (event, todoUid) => {
    this.props.firebase.tasks().push({
      todo: todoUid,
      text: this.state.text
    });
    this.setState({text: ''});
    event.preventDefault()
  };

  onRemoveTask = taskUid => {
    this.props.firebase.task(taskUid).remove()
  };

  onChangeText = event => {
    this.setState({text: event.target.value})
  };

  onEditTask = (task, text) => {
    this.props.firebase.task(task.uid).set({
      ...task,
      text
    })
  };

  render() {
    let { todoUid, tasks } = this.props;
    let { text } = this.state;
    let isInvalid = text === '';

    return (
      todoUid ?
        <div>
          <TasksList
            tasks={tasks}
            onRemoveTask={this.onRemoveTask}
          />
          <form onSubmit={event => this.onCreateTask(event, todoUid)}>
            <div className='input-field'>
              <input
                id='new_task'
                type='text'
                value={text}
                onChange={this.onChangeText}
                className='validate'
              />
              <label htmlFor='new_task'>New Task</label>
              <button
                className='btn-floating waves-effect waves-light'
                disabled={isInvalid}
                type='submit'
              ><i className="material-icons">add</i></button>
            </div>
          </form>
        </div> :
        <p>Select Todo</p>
    )
  }
}

const mapStateToProps = ({ selectedTodo, todosState }) => {
  let { uid: todoUid } = selectedTodo || null;
  let tasks = todosState.tasks || [];
  return { todoUid, tasks }
};

const mapDispatchToProps = dispatch => ({
  onSetTasks: tasks => {
    let listTasks = Object.keys(tasks || []).map(key => ({
      ...tasks[key],
      uid: key
    }));
    dispatch(setTasks(listTasks))
  }
});

export default compose(
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(Tasks)
