import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 全局注册axios
import axios from 'axios'
Vue.prototype.$Http=axios


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
