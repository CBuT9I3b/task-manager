import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withFirebase } from '../../services'
import { setTasks } from '../../actions'

import TasksList from './TasksList'
import AddTask from './AddTask'

class Tasks extends Component {
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
        return (
          <div>
              <h5>Tasks</h5>
              <TasksList />
              <AddTask />
          </div>
        )
    }
}

const mapStateToProps = ({ selectedTodo }) => {
    let { uid: todoUid } = selectedTodo || null;
    return { todoUid }
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
