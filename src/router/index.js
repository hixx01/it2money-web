/*
 * @Descripttion: 
 * @version: 
 * @Author: xiexing
 * @Date: 2020-06-28 10:05:53
 * @LastEditors: xiexing
 * @LastEditTime: 2020-08-02 17:20:14
 */
import Vue from 'vue'
import Router from 'vue-router'

// 解决router报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default () => new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/list'
  }, {
    path: '/list',
    title: '列表',
    name: 'List',
    component: () => import('../views/list/index.vue')
  }]
})
