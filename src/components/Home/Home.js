import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withAuthorization } from '../../containers'

class Home extends Component {
  render() {
    return (
      <div>
        <h3>
          Home Page
        </h3>
        <p>Hello {this.props.user}!</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const condition = user => !!user;

export default compose(
  connect(mapStateToProps),
  withAuthorization(condition)
)(Home)
