import React, { Component } from 'react'

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isActive: false
    }
  }

  render() {
    return (
      <form>
        <div className='row'>
          <div className='col s12 m8 l8'>
            Enter Your Task:
            <div className='input-field'>
              <i className='material-icons prefix'>create</i>
              <input id='add_task' type='text' className='validate' />
              <label htmlFor='add_task'>Task</label>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default AddTask
