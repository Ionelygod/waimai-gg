/**
 * Created by Fairy on 2018/12/27.
 */
import Vue from 'vue'
import moment from 'moment'


Vue.filter('dateString',(value, format)=> {
  return moment(value).format(format || 'YYYY-MM-DD HH:mm:ss')
})
