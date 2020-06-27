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
    name: 'List',
    component: () => import('../views/list/index.vue')
  }, {
    path: '/other',
    name: 'Other',
    component: () => import('../views/other/index.vue')
  }]
})
