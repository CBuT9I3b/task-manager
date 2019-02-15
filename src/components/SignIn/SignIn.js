import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'

import { withFirebase } from '../../services'

const INITIAL_STATE = {
  email: '',
  password: '',
  error: ''
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE
  }

  onChange = event => {
    this.setState({[event.target.name]: event.target.value})
  };

  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase.signIn(email, password)
      .then(() => {
        this.setState({...INITIAL_STATE});
        this.props.history.push('/home')
      })
      .catch(error => {
        this.setState({error: error.message})
      });
    event.preventDefault()
  };

  render() {
    let { email, password, error } = this.state;
    let isInvalid =
      email === '' ||
      password === '';

    return (
      <div className='row'>
        <div className='col s10 offset-s1 m8 offset-m2 l4 offset-l4'>
          <h5>Sign In</h5>
          <br />
          <form>
            <div className='input-field'>
              <input
                onChange={this.onChange}
                name='email'
                value={email}
                id='email'
                type='email'
                className='validate'
              />
              <label htmlFor='email'>Email</label>
            </div>
            <div className='input-field'>
              <input
                onChange={this.onChange}
                name='password'
                value={password}
                id='password'
                type='password'
                className='validate'
              />
              <label htmlFor='password'>Password</label>
            </div>
            <p>{error}</p>
            <button
              onClick={this.onSubmit}
              disabled={isInvalid}
              className='waves-effect waves-light btn'
            >Login</button>
            <p>
              Don't have an account? <Link to='/sign_up'>Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    )
  }
}

export default compose(
  withFirebase,
  withRouter
)(SignIn)
