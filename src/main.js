/**
 * Created by Fairy on 2018/12/21.
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button } from 'mint-ui';
import VueLazyload from 'vue-lazyload'
import './mock/mockServer'

import loading from './common/imgs/loading.gif'

Vue.use(VueLazyload,{
  loading
})

import NavHeader from './components/NavHeader/NavHeader.vue'
import Stars from './components/Stars/Stars.vue'
import CartControl from './components/CartControl/CartControl.vue'
import Split from './components/Split/Split.vue'
import store from './store'
import './filter'


Vue.component('NavHeader',NavHeader)
Vue.component('Stars',Stars)
Vue.component('CartControl',CartControl)
Vue.component('Split',Split)
Vue.component(Button.name,Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
