import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withAuthorization } from '../../containers'
import { Todos } from '..'

export const Home = ({ username, email }) => (
  <div className='row'>
    <div className='col'>
      <h5>
        Home Page
      </h5>
      <p>User: {username}</p>
      <p>Email: {email}</p>
      <Todos />
    </div>
  </div>
)

const mapStateToProps = ({ userState }) => {
  let { username, email } = userState || { username: null, email: null }
  return { username, email }
}

const condition = user => !!user;

export default compose(
  connect(mapStateToProps),
  withAuthorization(condition)
)(Home)
