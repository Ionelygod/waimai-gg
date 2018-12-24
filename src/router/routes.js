/**
 * Created by Fairy on 2018/12/21.
 */

import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import Shoprating from '../pages/Shop/Shoprating/Shoprating.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'

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
    path: '/shop',
    component: Shop,
    meta:{
      show:true
    },
    children:[
      {
        path: '/shop/goods',
        component: ShopGoods,
      },
      {
        path: '/shop/rating',
        component: Shoprating,
      },
      {
        path: '/shop/info',
        component: ShopInfo,
      },

      {
        path: '',
        redirect: '/shop/goods'
      }
    ]

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
