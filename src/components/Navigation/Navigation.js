import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { SignOut } from '..'

const NavigationNonAuth = () => (
  <nav>
    <div className='nav-wrapper'>
      <ul id='nav-mobile' className='right'>
        <li><NavLink to='/'>Landing</NavLink></li>
        <li><NavLink to='/sign_in'>Sign In</NavLink></li>
      </ul>
    </div>
  </nav>
);

const NavigationAuth = () => (
  <nav>
    <div className='nav-wrapper'>
      <ul id='nav-mobile' className='right'>
        <li><NavLink to='/'>Landing</NavLink></li>
        <li><NavLink to='/home'>Home</NavLink></li>
        <li><SignOut /></li>
      </ul>
    </div>
  </nav>
);

const Navigation = ({ user }) => (
  user ? <NavigationAuth /> : <NavigationNonAuth />
);

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Navigation)
