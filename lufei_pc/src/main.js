// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// eslint-disable-next-line no-unused-vars
import settings from './settings'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios' // 从node_modules目录中导入包
// 阻止ajax发送请求时附带cookie
axios.defaults.withCredentials = false

Vue.prototype.$axios = axios // 把对象挂载vue中

Vue.use(ElementUI)

Vue.prototype.$settings = settings

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
