import React, { Fragment } from 'react'

import { withAuthentication } from '../../containers'

import { Header, Main } from '..'

const App = () => (
  <Fragment>
    <Header />
    <Main />
  </Fragment>
);

export default withAuthentication(App)
