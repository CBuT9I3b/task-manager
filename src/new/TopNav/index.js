import React from 'react'

const TopNav = () => (
  <div className='navbar-fixed'>
    <nav>
      <div className='nav-wrapper white'>
        <a
          href='#!'
          data-target='slide_out'
          className='sidenav-trigger black-text'
        ><i className='material-icons'>menu</i></a>
        <ul className='right'>
          <li><a href='#!' className='black-text'>Link 1</a></li>
          <li><a href='#!' className='black-text'>Link 2</a></li>
          <li><a href='#!' className='black-text'>Link 3</a></li>
        </ul>
      </div>
    </nav>
  </div>
);

export default TopNav
