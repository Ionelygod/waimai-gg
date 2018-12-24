/**
 * Created by Fairy on 2018/12/21.
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button } from 'mint-ui';
import NavHeader from './components/NavHeader/NavHeader.vue'
import Stars from './components/Stars/Stars.vue'
import store from './store'
Vue.component('NavHeader',NavHeader)
Vue.component('Stars',Stars)
Vue.component(Button.name,Button)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
