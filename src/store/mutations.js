/**
 * Created by Fairy on 2018/12/22.
 */

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RECEIVE_RESET_INFO
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state, {address}){
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, {categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {shops}){
    state.shops = shops
  },
  [RECEIVE_USER_INFO](state, {user}){
    state.user = user
  },
  [RECEIVE_RESET_INFO](state){
    state.user = {}
  },

}
