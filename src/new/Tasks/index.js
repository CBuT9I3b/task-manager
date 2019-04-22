import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withFirebase } from '../../services'
import { setTasks } from '../../actions'

import TasksList from './TasksList'
import AddTask from './AddTask'

class Tasks extends Component {
  componentDidMount() {
    if (this.props.selectedTodoUid) {
      this.onListenerTasks(this.props.selectedTodoUid)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedTodoUid !== prevProps.selectedTodoUid) {
      this.onListenerTasks(this.props.selectedTodoUid)
    }
  }

  componentWillUnmount() {
    this.props.firebase.tasks().off();
  }

  onListenerTasks = todoUid => {
    this.props.firebase.tasks()
      .orderByChild('todo')
      .equalTo(todoUid)
      .on('value', snapshot => {
        this.props.onSetTasks(snapshot.val())
      })
  };

  render() {
    let { selectedTodoUid } = this.props;

    return (
      <div>
        <h5>Tasks</h5>
        {
          selectedTodoUid ?
            <div>
              <TasksList />
              <AddTask />
            </div> :
            <p>
              You need to select or create and select To-Do List
            </p>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ selectedTodo }) => ({
  selectedTodoUid: selectedTodo && selectedTodo.uid
});

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
