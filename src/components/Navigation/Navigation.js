import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { SignOut } from '..'

const NavigationNonAuth = () => (
  <ul>
    <li>
      <NavLink to='/'>Landing</NavLink>
    </li>
    <li>
      <NavLink to='/sign_in'>Sign In</NavLink>
    </li>
  </ul>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <NavLink to='/'>Landing</NavLink>
    </li>
    <li>
      <NavLink to='/home'>Home</NavLink>
    </li>
    <li>
      <SignOut />
    </li>
  </ul>
);

const Navigation = ({ user }) => (
  user ? <NavigationAuth /> : <NavigationNonAuth />
);

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Navigation)
