import React from 'react'
import { compose } from 'redux'

import { withUser, withTodos } from '../../containers'

const TopNav = ({ user, selectedTodo, onRemoveTodo }) => (
  <div className='navbar-fixed'>
    <nav>
      <div className='nav-wrapper white'>
        <a
          href='#!'
          data-target='slide_out'
          className='sidenav-trigger black-text'
        ><i className='material-icons'>menu</i></a>
        <a
          href='#!'
          className='brand-logo center black-text hide-on-med-and-down'
        >
          {
            user && selectedTodo ? selectedTodo.text : 'Task Manager'
          }
        </a>
        <ul className='right'>
          {
            user && selectedTodo &&
            <li><a
              onClick={() => onRemoveTodo(selectedTodo)}
              href='#!'
              className='black-text'
            ><i className='material-icons'>delete</i></a></li>
          }
        </ul>
      </div>
    </nav>
  </div>
);

export default compose(
  withUser,
  withTodos
)(TopNav)
