import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => (
  <div>
    <h5>Home</h5>
    <p>
      Welcome to the little simple task manager.
      To start using the service you need to <Link to='/sign_in'>Sign In</Link>.
    </p>
  </div>
);

export default Landing
