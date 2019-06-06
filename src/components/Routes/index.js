import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { withUser } from '../../hocs'

import { PublicHomePage, HomePage, SignIn, SignUp } from '..'

const Routes = ({ user }) => (
  <Switch>
    <Route exact path='/' render={() => (
      user ? <Redirect to='/manager' /> : <PublicHomePage />
    )} />
    <Route path='/manager' render={() => (
      user ? <HomePage /> : <Redirect to='/' />
    )} />
    <Route path='/sign_in' render={() => (
      user ? <Redirect to='/' /> : <SignIn />
    )} />
    <Route path='/sign_up' render={() => (
      user ? <Redirect to='/' /> : <SignUp />
    )} />
  </Switch>
);

export default withUser(Routes)
