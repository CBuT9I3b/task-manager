import React from 'react'

import { withAuthorization } from '../../containers'
import { Todos, Tasks } from '..'

const Manager = () => (
  <div className='row'>
    <div className='col l5'>
      <h6>Todos</h6>
      <Todos />
    </div>
    <div className='col l5'>
      <h6>Tasks</h6>
      <Tasks />
    </div>
  </div>
);

const condition = user => !!user;

export default withAuthorization(condition)(Manager)
