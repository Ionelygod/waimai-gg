/**
 * Created by Fairy on 2018/12/22.
 */

import ajax from './ajax'

const prefix = '/api'
// const prefix = ''
// ## 目录：
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAdderess = (longitude, latitude)  => ajax(prefix + `/position/${latitude},${longitude}`);
// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqCategorys = () => ajax(prefix + '/index_category');
// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShopLists = (longitude, latitude) => ajax(prefix + '/shops',{latitude, longitude});
// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>

// [5、获取一次性验证码](#5获取一次性验证码)<br/>

// [6、用户名密码登陆](#6用户名密码登陆)<br/>
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(prefix + '/login_pwd',{name, pwd, captcha}, 'POST')
// [7、发送短信验证码](#7发送短信验证码)<br/>
export const reqSengCode = phone => ajax(prefix + '/sendcode',{phone})
// [8、手机号验证码登陆](#8手机号验证码登陆)<br/>
export const reqSmsLogin =  (phone, code) => ajax(prefix  + 'login_sms', {phone, code},'POST')
// [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
export const getUserInFo = () => ajax(prefix + '/userinfo')
// [10、用户登出](#10用户登出)<br/>
export const reqlogout = () => ajax(prefix + '/logout')

//获取食品分类的数据
export const getShopGoods = () => ajax('/goods')
//获取评论的数据
export const getShopRating = () => ajax('/ratings')
//获取商家的详情数据
export const getShopInfo = () => ajax('/info')


