# gshop

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 分类轮播的实现

## 登录的前台效果
  1. 两种登录方式切换的效果8
  2. 手机号验证
  3. 倒计时
  4. 密码的显示/隐藏切换
## 登录的前后台交互效果
  1. 一次性图形验证码 //finish
  2. 一次性短信验证码  //finish
  3. 短信登录/ 密码登录  //finish
  4. 前台的表单验证    //finish
  5. 退出登录   //finish
  6. 自动登录   // finish
 ## 店铺内部的布局 并注册路由  // finish
1). 拆分界面路由: 嵌套路由
2). 路由的定义/配置|使用

##  vuex的多模块编码
  1). 设计多个模块
      msite
      user
      shop
  2). 将state拆分到对应的模块中, 确定整个state的结构
  3). 将mutation和action拆分到对应的模块中
  4). 在组件中通过mapState读取特定模块的状态数据
      ...mapState({user: state => state.user.user})
 ## 模拟(mock)数据/接口
  1). 前后台分离的理解
      区别前后台分离的应用和前后台不分离的应用
      区别一般的HTTP请求和ajax请求
  2). json数据设计的理解
      json数据的类型: 对象/数组/字符串/数值/布尔值
      json数据的组成: 结构(名称和类型)和值
  3). mockjs的理解和使用
      用来提供mock数据接口的库
      生成随机数据, 拦截ajax请求
  ##  ShopHeader组件
    1). 异步显示数据效果的编码流程
        ajax
          ajax请求函数
          接口请求函数
        vuex
          state
          mutation-types
          actions
          mutations
        组件
          dispatch(): 异步获取后台数据到vuex的state
          mapState(): 从vuex的state中读取对应的数据
          模板中显示
    2). 初始显示异常
        情况: Cannot read property 'xxx' of null"
          原因: 初始值是空对象, 内部没有数据, 而模块中直接显示3层表达式
          解决: 使用v-if指令
    3). vue transition动画
        <transition name="xxx">
        xxx-enter-active / xxx-leave-active
          transition
        xxx-enter / xxx-leave-to
          隐藏时的样式
