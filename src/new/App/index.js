import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { withAuthentication } from '../../containers'

import { TopNav, SideNav } from '..'

const App = () => (
  <BrowserRouter>
    <TopNav />
    <SideNav />
  </BrowserRouter>
);

export default withAuthentication(App)
