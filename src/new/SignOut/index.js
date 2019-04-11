import React from 'react'
import { NavLink } from 'react-router-dom'

import { withFirebase } from '../../services'

const SignOut = ({ firebase }) => (
  <NavLink
    to='/'
    onClick={firebase.signOut}
    className='waves-effect waves-red'
  ><i className='material-icons'>exit_to_app</i>Sign Out</NavLink>
);

export default withFirebase(SignOut)
