import React, { Component } from 'react'

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isActive: false
    }
  }

  onToggleActive = () => this.setState({ isActive: true });

  onChangeText = event => this.setState({ text: event.target.value });

  render() {
    let { text, isActive } = this.state;
    let isInvalid = text === '';

    return (
      isActive ?
        <form>
          <div className='row'>
            <div className='input-field col s12 m8 l8'>
              <i className='material-icons prefix'>create</i>
              <input
                onChange={this.onChangeText}
                value={text}
                id='add_task'
                type='text'
                className='validate'
              />
              <label htmlFor='add_task'>Task</label>
            </div>
          </div>
          <button
            className='btn-flat waves-effect waves-red'
          >Cancel</button>
          <button
            disabled={isInvalid}
            className='btn-flat waves-effect waves-green'
          >Ok</button>
        </form> :
        <button
          onClick={this.onToggleActive}
          className='btn-flat waves-effect waves-teal'
        ><i className='material-icons left'>add</i>New Task</button>
    )
  }
}

export default AddTask
