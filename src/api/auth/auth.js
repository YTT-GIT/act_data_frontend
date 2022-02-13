import request from '@/utils/request'

// 前台用户登录
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
// 登录后获取前台用户信息
export function getUserInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}
// 用户注销
export function logout() {
  return request({
    url: '/user/logout'
  })
}