import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { withAuthentication } from '../../containers'

import { Header, Main } from '..'

const App = () => (
  <BrowserRouter>
    <Header />
    <Main />
  </BrowserRouter>
);

export default withAuthentication(App)
