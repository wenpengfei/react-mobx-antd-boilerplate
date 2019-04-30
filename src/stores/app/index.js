import { observable, action } from 'mobx'

export default class AppStore {

  pageLoading = false
  currentUser = {}
  token = ''

  toggleLoading(loading) {
    this.pageLoading = loading || !this.pageLoading
  }
}
