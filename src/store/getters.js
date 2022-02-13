// 存储当前登录信息和当前的用户的token
const getters = {
  token: state => state.user.token,   // token
  user: state => state.user.user,     // 用户对象
}
export default getters