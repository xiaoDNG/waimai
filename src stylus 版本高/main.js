import Vue from 'vue'
import App from './App' // 引入自定义组件
// import "lib-flexible/flexible"

import router from "./router"
import 'lib-flexible'

new Vue({
  el:'#root',
  // 注册局部组件
  // components: { // 注册组件(后面才能写组件标签)比一下方法大10kb左右  
  //   App: App
  // },
  // template: '<App/>',
  render:h=>h(App),
  router//所有组件都可以看到$router和$route 和<ruter-view>
})