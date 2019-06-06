import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { withUser } from '../../containers'

import { Landing, SignIn, SignUp, Tasks } from '..'

const Main = ({ user }) => (
  <main>
    <div className='container'>
      <br />
      <Switch>
        <Route exact path='/' render={() => user ? <Tasks /> : <Landing />} />
        <Route path='/sign_in' render={() => user ? <Redirect to='/' /> : <SignIn />} />
        <Route path='/sign_up' render={() => user ? <Redirect to='/' /> : <SignUp />} />
      </Switch>
    </div>
  </main>
);

export default withUser(Main)
