import React from 'react'

import { withUser } from '../../containers'

const UserBar = ({ user }) => (
  <div className='user-view'>
    <a href='#name' ><span className='black-text name'>{user.username}</span></a>
    <a href='#email' ><span className='black-text email'>{user.email}</span></a>
  </div>
);

export default withUser(UserBar)
