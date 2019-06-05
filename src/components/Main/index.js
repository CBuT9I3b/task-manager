import React, { lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { withUser } from '../../containers'

import { Preloader } from '..'

const Landing = lazy(() => import('../Landing'));
const SignIn = lazy(() => import('../SignIn'));
const SignUp = lazy(() => import('../SignUp'));
const Tasks = lazy(() => import('../Tasks'));

const Main = ({ user }) => (
  <main>
    <div className='container'>
      <br />
      <Suspense fallback={<Preloader />}>
        <Switch>
          <Route exact path='/' render={() => user ? <Tasks /> : <Landing />} />
          <Route path='/sign_in' render={() => user ? <Redirect to='/' /> : <SignIn />} />
          <Route path='/sign_up' render={() => user ? <Redirect to='/' /> : <SignUp />} />
        </Switch>
      </Suspense>
    </div>
  </main>
);

export default withUser(Main)
