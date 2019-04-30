import { observable, action } from 'mobx'

export default class StoreBase {

   state = ''
   list = []
   loading = false
   totalCount = 0
   counter = 0
   pageIndex = 1
   pageSize = 10
   submiting = false
   initialFormValue = {}

  constructor(service) {
    this.service = service
  }

   changeSize(pageSize) {
    this.pageSize = pageSize
  }

   async getPageList(options) {
    options.pageIndex = options.pageIndex || this.pageIndex
    options.pageSize = options.pageSize || this.pageSize
    this.pageIndex = options.pageIndex
    this.pageSize = options.pageSize
    this.loading = true
    const result = await this.service.list(options)
    this.loading = false
    this.list = result.data
    this.totalCount = result.totalCount
  }

   async add(body) {
    this.submiting = true
    try {
      const result = await this.service.add(body)
      if (result.statusCode && result.statusCode !== 200) {
        throw new Error(result.message)
      }
    } catch (error) {
      throw error
    } finally {
      this.submiting = false
    }
  }

   async edit(id, body) {
    this.submiting = true
    try {
      const result = await this.service.update(id, body)
      if (result.statusCode && result.statusCode !== 200) {
        throw new Error(result.message)
      }
    } catch (error) {
      throw error
    } finally {
      this.submiting = false
    }
  }

   async remove(id) {
    this.submiting = true
    try {
      await this.service.delete(id)
      this.getPageList({ pageIndex: this.pageIndex })
    } catch (error) {
      throw error
    } finally {
      this.submiting = false
    }
  }

   initializeForm(form) {
    this.initialFormValue = form
  }
}
