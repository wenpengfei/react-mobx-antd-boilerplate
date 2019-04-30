import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from './components'
import { User, Member, NotFound } from './views'
import { withRouter } from 'react-router'

class Pages extends React.Component{
  componentWillMount() {
    // const { token } = auth.getLoginCookie()
    // if (!token) {
    //   this.props.history.push('/login')
    // }
  }
  render() {
    // const { pageLoading } = this.props.appStore
    return (
      <Layout loading={false}>
        <Switch>
          <Route key="/user" path="/user" component={User} />
          <Route key="/member" path="/member" component={Member} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    )
  }
}

export default withRouter(Pages)