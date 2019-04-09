import React from 'react'
import { NavLink } from 'react-router-dom'

import { withUser } from '../../containers'

import { SignOut, Todos, UserBar } from '..'

const SideNavNonAuth = () => (
  <ul className='sidenav sidenav-fixed deep-orange accent-1'>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/sign_in'>Sign In</NavLink></li>
  </ul>
);

const SideNavAuth = () => (
  <ul className='sidenav sidenav-fixed deep-orange accent-1'>
    <UserBar />
    <li><NavLink to='/'>Home</NavLink></li>
    <li><div className='divider' /></li>
    <li><a href='#!' className='subheader'>To-Do Lists:</a></li>
    <Todos />
    <li><div className='divider' /></li>
    <li><SignOut /></li>
  </ul>
);

const SideNav = ({ user }) => (
  user ? <SideNavAuth /> : <SideNavNonAuth/>
);

export default withUser(SideNav)
