/**
 * Created by Fairy on 2018/12/21.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  routes
})
const paths = ['/userinfo']
router.beforeEach((to,form,next)=>{
  console.log(to,form);
  const path = to.path
  if(paths.indexOf(path) >= 0){
    const userId = Vue.store.state.user.user._id
    console.log(userId);
    if(userId){
      next('/profile')
    }else{
      next('/login')
    }
  }else{
    next()
  }
})
export default router
