import React from 'react'

import { withAuthorization } from '../../containers'
import { Todos } from '..'

const Manager = () => (
  <div className='row'>
    <div className='col l4'>
      <h6>Todos</h6>
      <Todos />
    </div>
    <div className='col l8'>
      <h6>Tasks</h6>
    </div>
  </div>
);

const condition = user => !!user;

export default withAuthorization(condition)(Manager)
