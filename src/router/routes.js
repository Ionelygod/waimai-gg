/**
 * Created by Fairy on 2018/12/21.
 */

import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

export default [
  {
    path: '/msite',
    component: Msite
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/login',
    component: Login,
    meta:{
      show:true
    }
  },
  {
    path: '/',
    redirect: '/msite'
  }
]
