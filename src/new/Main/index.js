import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Landing, SignIn, SignUp } from '..'

const Main = () => (
  <main>
    <div className='container'>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/sign_in' component={SignIn} />
        <Route path='/sign_up' component={SignUp} />
      </Switch>
    </div>
  </main>
);

export default Main
