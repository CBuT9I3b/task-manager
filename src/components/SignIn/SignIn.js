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
    event.preventDefault();
    let { email, password } = this.state;
    this.props.firebase.signIn(email, password)
      .then(() => {
        this.setState({...INITIAL_STATE});
        this.props.history.push('/home')
      })
      .catch(error => {
        this.setState({error: error.message})
      })
  };

  render() {
    let { email, password, error } = this.state;
    let isInvalid =
      email === '' ||
      password === '';

    return (
      <form>
        <h3>Sign In</h3>
        <input
          onChange={this.onChange}
          name='email'
          value={email}
          id='email'
          type='email'
        />
        <label htmlFor='email'>Email</label>
        <input
          onChange={this.onChange}
          name='password'
          value={password}
          id='password'
          type='password'
        />
        <label htmlFor='password'>Password</label>
        <p>{error}</p>
        <button
          onClick={this.onSubmit}
          disabled={isInvalid}
        >Login</button>
        <p>
          Don't have an account? <Link to='/sign_up'>Sign Up</Link>
        </p>
      </form>
    )
  }
}

export default compose(
  withFirebase,
  withRouter
)(SignIn)
