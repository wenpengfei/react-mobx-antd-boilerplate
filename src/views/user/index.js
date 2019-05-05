import React from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router'

@withRouter
@inject('userStore')
@observer
class User extends React.Component {
  render() {
    const { userStore } = this.props
    return <h1>{userStore.title}</h1>
  }
}

export default User
