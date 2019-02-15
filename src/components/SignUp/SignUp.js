import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

import { withFirebase } from '../../services'

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: ''
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE
  }

  onChange = event => {
    this.setState({[event.target.name]: event.target.value})
  };

  onSubmit = event => {
    event.preventDefault();
    let { username, email, passwordOne } = this.state;
    this.props.firebase.signUp(email, passwordOne)
      .then(authUser => (
        this.props.firebase.user(authUser.user.uid).set({
          username,
          email
        })
      ))
      .then(() => {
        this.setState({...INITIAL_STATE});
        this.props.history.push('/home')
      })
      .catch(error => {
        this.setState({error: error.message})
      })
  };

  render() {
    let { username, email, passwordOne, passwordTwo, error } = this.state;
    let isInvalid =
      username === '' ||
      email === '' ||
      passwordOne === '' ||
      passwordTwo === '' ||
      passwordOne !== passwordTwo;

    return (
      <form>
        <h3>Sign Up</h3>
        <input
          onChange={this.onChange}
          name='username'
          value={username}
          id='username'
          type='text'
        />
        <label htmlFor='username'>Name</label>
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
          name='passwordOne'
          value={passwordOne}
          id='passwordOne'
          type='password'
        />
        <label htmlFor='passwordOne'>Password</label>
        <input
          onChange={this.onChange}
          name='passwordTwo'
          value={passwordTwo}
          id='passwordTwo'
          type='password'
        />
        <label htmlFor='passwordTwo'>Re-enter Password</label>
        <p>{error}</p>
        <button
          onClick={this.onSubmit}
          disabled={isInvalid}
        >Create Account</button>

      </form>
    )
  }
}

export default compose(
  withFirebase,
  withRouter
)(SignUp)
