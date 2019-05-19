import React from 'react'
import { NavLink } from 'react-router-dom'

import { withUser } from '../../containers'

import { SignOut, Todos, UserBar } from '..'

const SideNavNonAuth = () => (
  <div>
    <li><NavLink
      to='/'
      className='waves-effect waves-red'
    ><i className='material-icons'>home</i>Home</NavLink></li>
    <li><NavLink
      to='/sign_in'
      className='waves-effect waves-red'
    ><i className='material-icons'>account_circle</i>Sign In</NavLink></li>
  </div>
);

const SideNavAuth = () => (
  <div>
    <UserBar />
    <li><SignOut /></li>
    <li><div className='divider' /></li>
    <li><a href='#!' className='subheader'>To-Do Lists:</a></li>
    <Todos />
  </div>
);

const SideNav = ({ user }) => (
  <ul id='slide_out' className='sidenav sidenav-fixed deep-orange accent-1'>
    {user ? <SideNavAuth /> : <SideNavNonAuth/>}
  </ul>
);

export default withUser(SideNav)
