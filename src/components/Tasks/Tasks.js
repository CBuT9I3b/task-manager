import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withFirebase } from '../../services'
import { setTasks } from '../../actions'

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  componentDidMount() {
    this.onListenerTasks(this.props.uid)
  }

  componentWillUnmount() {
    this.props.firebase.tasks().off()
  }

  onListenerTasks = todoUid => {
    this.props.firebase.tasks()
      .orderByChild(todoUid)
      .on('value', snapshot => {
        this.props.onSetTasks(snapshot.val())
      })
  };

  onCreateTask = (event, uid) => {
    this.props.firebase.tasks().push({
      todo: uid,
      text: this.state.text
    });
    this.setState({text: ''});
    event.preventDefault()
  };

  onRemoveTask = uid => {
    this.props.firebase.task(uid).remove()
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
    return null
  }
}

const mapStateToProps = ({ selectedTodo }) => {
  let { uid } = selectedTodo || null;
  return uid
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
