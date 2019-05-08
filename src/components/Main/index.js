import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { withUser } from '../../containers'

import { Landing, Tasks, SignIn, SignUp } from '..'

const Main = ({ user }) => (
  <main>
    <div className='container'>
      <Switch>
        <Route exact path='/' component={user ? Tasks : Landing} />
        <Route path='/sign_in' component={SignIn} />
        <Route path='/sign_up' component={SignUp} />
      </Switch>
    </div>
  </main>
);

export default withUser(Main)
