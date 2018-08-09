import * as fetch from '../utils/fetch'

export const login = (data) => {
  return fetch.post('/api/v1/man/admin/login', {}, data)
}
