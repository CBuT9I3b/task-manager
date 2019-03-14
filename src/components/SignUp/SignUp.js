import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
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
        this.props.history.push('/manager')
      })
      .catch(error => {
        this.setState({error: error.message})
      });
    event.preventDefault()
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
      <div className='row'>
        <div className='col s10 offset-s1 m8 offset-m2 l4 offset-l4'>
          <h5>Sign Up</h5>
          <br />
          <form onSubmit={this.onSubmit}>
            <div className='input-field'>
              <input
                onChange={this.onChange}
                name='username'
                value={username}
                id='username'
                type='text'
                className='validate'
              />
              <label htmlFor='username'>Name</label>
            </div>
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
                name='passwordOne'
                value={passwordOne}
                id='passwordOne'
                type='password'
                className='validate'
              />
              <label htmlFor='passwordOne'>Password</label>
            </div>
            <div className='input-field'>
              <input
                onChange={this.onChange}
                name='passwordTwo'
                value={passwordTwo}
                id='passwordTwo'
                type='password'
                className='validate'
              />
              <label htmlFor='passwordTwo'>Re-enter Password</label>
            </div>
            <p className='red-text'>{error}</p>
            <button
              type='submit'
              disabled={isInvalid}
              className='waves-effect waves-light btn'
            >Create Account</button>
            <p>
              Have an account? <Link to='/sign_in'>Sign In</Link>
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
)(SignUp)
