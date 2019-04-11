import React from 'react'
import { NavLink } from 'react-router-dom'

import { withUser } from '../../containers'

import { SignOut, Todos, UserBar } from '..'

const SideNavNonAuth = () => (
  <ul className='sidenav sidenav-fixed indigo accent-1'>
    <li><NavLink
      to='/'
      className='waves-effect waves-red'
    ><i className='material-icons'>home</i>Home</NavLink></li>
    <li><NavLink
      to='/sign_in'
      className='waves-effect waves-red'
    ><i className='material-icons'>account_circle</i>Sign In</NavLink></li>
  </ul>
);

const SideNavAuth = () => (
  <ul className='sidenav sidenav-fixed indigo accent-1'>
    <UserBar />
    <li><SignOut /></li>
    <li><div className='divider' /></li>
    <li><a href='#!' className='subheader'>To-Do Lists:</a></li>
    <Todos />
  </ul>
);

const SideNav = ({ user }) => (
  user ? <SideNavAuth /> : <SideNavNonAuth/>
);

export default withUser(SideNav)
