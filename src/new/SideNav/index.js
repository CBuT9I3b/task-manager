import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { SignOut, Todos } from '..'

const SideNavNonAuth = () => (
  <ul className='sidenav sidenav-fixed deep-orange accent-1'>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/sign_in'>Sign In</NavLink></li>
  </ul>
);

const SideNavAuth = () => (
  <ul className='sidenav sidenav-fixed deep-orange accent-1'>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><div className='divider' /></li>
    <li><a className='subheader'>Todos</a></li>
    <Todos />
    <li><div className='divider' /></li>
    <li><SignOut /></li>
  </ul>
);

const SideNav = ({ user }) => (
  user ? <SideNavAuth /> : <SideNavNonAuth/>
);

const mapStateToProps = ({ userState }) => ({
  user: userState
});

export default connect(mapStateToProps)(SideNav)
