/**
 * Created by Fairy on 2018/12/22.
 */

import {
  reqAdderess,
  reqCategorys,
  reqShopLists,
  reqlogout,
  getUserInFo
} from '../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RECEIVE_RESET_INFO
} from './mutation-types'

export default {
  async getadderess({commit,state}){ //获取地理信息
    const {longitude,latitude} = state
    const {data} = await reqAdderess(longitude,latitude)
    const address = data
    commit(RECEIVE_ADDRESS,{address})
  },
  async getcategory({commit, state}){   //获取食物分类
    const {data} = await reqCategorys()
    const categorys = data
    commit(RECEIVE_CATEGORYS,{categorys})
  },
  async getshops({commit, state}){  //获取店铺信息
    const {longitude,latitude} = state
    const {data} = await reqShopLists(longitude,latitude)
    const shops = data
    commit(RECEIVE_SHOPS,{shops})
  },
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
