import React from 'react'
import { NavLink } from 'react-router-dom'

import { withFirebase } from '../../services'

const SignOut = ({ firebase }) => (
  <NavLink
    to='/'
    onClick={firebase.signOut}
  >Sign Out</NavLink>
);

export default withFirebase(SignOut)
