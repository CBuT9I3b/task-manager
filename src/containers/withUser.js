import React from 'react'
import { connect } from 'react-redux'

const withUser = Component => {
  const WithUser = ({ user }) => (
    <Component user={user} />
  );

  const mapStateToProps = ({ userState }) => ({
    user: userState
  });

  return connect(mapStateToProps)(WithUser)
};

export default withUser
