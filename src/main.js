/*
 * @Descripttion: 
 * @version: 
 * @Author: xiexing
 * @Date: 2020-06-28 10:05:53
 * @LastEditors: xiexing
 * @LastEditTime: 2020-08-02 19:47:43
 */
import Vue from 'vue'
import App from './App.vue'
import axios from './lib/axios'
import createRouter from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.prototype.$http = axios

const router = createRouter()
// Vue.prototype.$router = router
console.log('>>>>creatrouter', router)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
