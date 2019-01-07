import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/api/login',
    method: 'post',
    data: {
      loginName: username,
      password
    }
  })
}

export function getInfo(id) {
  return request({
    url: '/api/user/' + id,
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function register({ loginName, password, phone, role, university }) {
  return request({
    url: '/api/register',
    method: 'post',
    data: { loginName, password, phone, role, university }
  })
}
