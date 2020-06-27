import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

const router = createRouter()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
