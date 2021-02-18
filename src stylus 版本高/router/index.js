/*
向外暴露路由模块
*/ 
import Vue from 'vue'
import VueRouter from "vue-router"
import routes from './routes.js'

Vue.use(VueRouter)


export default new VueRouter({
  mode:'history',//路由路径没有#
  // 项目中所有的路由
  routes
});