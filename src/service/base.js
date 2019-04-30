import { fetch } from '../utils'

export default class BaseService {

  constructor(endpoint) {
    this.endpoint = endpoint
    this.fetch = fetch
  }

  list = (params) => fetch.get(this.endpoint, { params })
  add = (body) => fetch.post(this.endpoint, body)
  update = (id, body) => fetch.put(`${this.endpoint}/${id}`, body)
  get = (id) => fetch.get(`${this.endpoint}/${id}`)
  delete = (id) => fetch.delete(`${this.endpoint}/${id}`)
}
