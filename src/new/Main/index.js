import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

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

const mapDispatchToProps = ({ userState }) => ({
  user: userState
});

export default connect(mapDispatchToProps)(Main)
