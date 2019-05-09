import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { NavLink } from 'react-router-dom'

import { withFirebase } from '../../services'
import { resetState } from '../../actions'

const SignOut = ({ firebase, dispatch }) => (
  <NavLink
    to='/'
    onClick={
      () => {
        firebase.signOut();
        dispatch(resetState())
      }
    }
    className='waves-effect waves-teal'
  ><i className='material-icons'>exit_to_app</i>Sign Out</NavLink>
);

export default compose(
  withFirebase,
  connect()
)(SignOut)
