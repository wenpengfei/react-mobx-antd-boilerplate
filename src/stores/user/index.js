import BaseStore from '../base'
import { UserService } from '../../service'
import { action } from 'mobx'
import { auth } from '../../utils'

export default class UserStore extends BaseStore {
  constructor() {
    super(new UserService())
  }

   async login(options) {
    try {
      const result = await this.service.login(options.userName, options.password)
      const { user, token } = result
      auth.setLoginCookie(user._id, token)
    } catch (error) {
      throw error
    }
  }

   async logout() {
    auth.removeLoginCookie()
  }
}
