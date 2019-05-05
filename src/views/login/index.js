import * as React from 'react'
import { withRouter } from 'react-router'
import { LoginForm } from '../../components'
import styles from './index.module.scss'

@withRouter
class Login extends React.Component {
  handleLoginSuccess = () => {
    this.props.history.push('/user/list')
  }

  componentDidMount() {

  }

  render() {
    return (<div className={styles.bg}>
      <div className={styles.container}>
        <LoginForm onSuccess={this.handleLoginSuccess} />
      </div>
    </div>)
  }
}

export default withRouter(Login)
