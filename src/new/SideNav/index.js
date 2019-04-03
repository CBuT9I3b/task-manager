import React from 'react'
import { connect } from 'react-redux'

const SideNavNonAuth = () => (
  <ul>

  </ul>
)

const SideNavAuth = () => (
  <ul>

  </ul>
)

const SideNav = () => (
  <ul className='sidenav sidenav-fixed'>
    <li><a href='#!'>Link 1</a></li>
    <li><a href='#!'>Link 2</a></li>
    <li><a href='#!'>Link 3</a></li>
  </ul>
);

const mapStateToProps = ({ userState }) => ({
  user: userState
});

export default connect(mapStateToProps)(SideNav)
