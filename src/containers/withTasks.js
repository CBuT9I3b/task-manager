import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withFirebase } from '../services'
import { setTasks } from '../actions'

const withTasks = Component => {
  class WithTasks extends React.Component {
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

    onCreateTask = text => {
      this.props.firebase.tasks().push({
        todo: this.props.todoUid,
        text: text
      })
    };

    onRemoveTask = taskUid => {
      this.props.firebase.task(taskUid).remove()
    };

    onEditTask = (task, text) => {
      this.props.firebase.task(task.uid).set({
        ...task,
        text
      })
    };

    render() {
      return <Component {...this.props} />
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

  return compose(
    withFirebase,
    connect(mapStateToProps, mapDispatchToProps)
  )(WithTasks)
};

export default withTasks
