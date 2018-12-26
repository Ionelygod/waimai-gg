/**
 * Created by Fairy on 2018/12/25.
 */

import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/goods', {code:0,data:data.goods})

Mock.mock('/ratings', {code:0,data:data.ratings})

Mock.mock('/info', {code:0,data:data.info})

console.log('mock....');
