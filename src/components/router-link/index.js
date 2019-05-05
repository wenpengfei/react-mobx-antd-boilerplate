import * as React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'

const Span = styled.span`
  display: inline-block;
`

class RouterLink extends React.Component{
  routeTo = () => {
    this.props.history.push(this.props.to)
  }
  render() {
    const { name } = this.props
    return (
      <Span onClick={this.routeTo}>{name}</Span>
    )
  }
}

export default withRouter(RouterLink)
