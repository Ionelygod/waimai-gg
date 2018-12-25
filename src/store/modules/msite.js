/**
 * Created by Fairy on 2018/12/25.
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
} from '../mutation-types'
import {
  reqAdderess,
  reqCategorys,
  reqShopLists,
} from '../../api'
const state = {
  longitude:116.36867,
  latitude:40.10038,
  address: {},
  categorys: [],
  shops: [],
}
const mutations = {
  [RECEIVE_ADDRESS](state, {address}){
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, {categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {shops}){
    state.shops = shops
  },
}

const actions = {
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
}
const getters = {

}
export default {
  state,
  mutations,
  actions,
  getters
}


