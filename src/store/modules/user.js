/**
 * Created by Fairy on 2018/12/25.
 */
import {
  RECEIVE_USER_INFO,
  RECEIVE_RESET_INFO
} from '../mutation-types'
import {
  reqlogout,
  getUserInFo
} from '../../api'
const state = {
  user: {}, // 用户信息
}
const mutations = {

  [RECEIVE_USER_INFO](state, {user}){
    state.user = user
  },
  [RECEIVE_RESET_INFO](state){
    state.user = {}
  },

}

const actions = {
  async getUserInfo({commit},data){  //获取用户信息
    const user = data
    commit(RECEIVE_USER_INFO,{user})
  },
  async getUser({commit}){  //获取用户信息
    const result = await getUserInFo()
    if(result.code === 0){
      const user = result.data
      commit(RECEIVE_USER_INFO,{user})
    }

  },
  logout({commit}){  //获取店铺信息
    reqlogout()
    commit(RECEIVE_RESET_INFO)
  },
}
const getters = {

}
export default {
  state,
  mutations,
  actions,
  getters
}


