import { getInfo, login } from '@/api/login'
import { getToken, setToken, removeToken, setStroage, removeStroage } from '@/utils/auth'
import { Message } from 'element-ui'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    user: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_USER: (state, user) => {
      state.user = user
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response
          if (data.role === userInfo.role) {
            setToken(data.token)
            setStroage('userId', JSON.stringify(data))
            commit('SET_TOKEN', data.token)
            commit('SET_NAME', username)
            commit('SET_USER', data)
            resolve()
          } else {
            Message({
              message: '用户名密码错误',
              type: 'warning'
            })
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        console.log(window.localStorage.getItem('userId'))
        const id = JSON.parse(window.localStorage.getItem('userId')).id
        getInfo(id).then(response => {
          const data = response
          console.log(data)
          commit('SET_NAME', data.phone)
          commit('SET_USER', data)
          commit('SET_AVATAR', data.avatar)
          setStroage('userId', JSON.stringify(data))
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        commit('SET_USER', [])
        removeStroage('userId')
        removeToken()
        resolve()
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
