import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

class MemberEdit extends React.Component {
  render() {
    const { match: { url: matchedUrl } } = this.props
    return <h1>Add</h1>
  }
}

export default MemberEdit