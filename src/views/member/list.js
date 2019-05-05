import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

class MemberList extends React.Component {
  render() {
    const { match: { url: matchedUrl } } = this.props
    return <h1>list</h1>
  }
}

export default MemberList