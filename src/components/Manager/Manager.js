import React from 'react'

import { withAuthorization } from '../../containers'
import { Todos, Tasks } from '..'

const Manager = () => (
  <div className='container'>
    <div className='row'>
      <div className='col s3 m3 l3'>
        <h5>Todos</h5>
        <Todos />
      </div>
      <div className='col s9 m9 l9'>
        <h5>Tasks</h5>
        <Tasks />
      </div>
    </div>
  </div>
);

const condition = user => !!user;

export default withAuthorization(condition)(Manager)
