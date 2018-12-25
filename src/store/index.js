/**
 * Created by Fairy on 2018/12/22.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import actions from './actions'
import getters from './getters'
import msite from './modules/msite'
import user from './modules/user'

export default new Vuex.Store({
  modules:{
    msite,
    user
  },
  actions,
  getters
})
