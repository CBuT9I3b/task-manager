import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { withAuthentication } from '../../containers'

import { Navigation, Landing, Manager, SignUp, SignIn } from '..'

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Route exact path='/' component={Landing} />
      <Route path='/manager' component={Manager} />
      <Route path='/sign_up' component={SignUp} />
      <Route path='/sign_in' component={SignIn} />
    </div>
  </BrowserRouter>
);

export default withAuthentication(App)
