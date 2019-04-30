import React from 'react'
import ReactDOM from 'react-dom'
import { observer, Provider } from 'mobx-react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login } from './views'

import 'antd/dist/antd.css'

import store from './stores'
import Pages from './pages'

const App = observer(class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route key="/login" path="/login" component={Login} />
          <Route key="/" path="/" component={Pages} />
        </Switch>
      </Router>
    )
  }
})

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root'))