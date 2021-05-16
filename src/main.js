import Vue from 'vue'
import VueRx from 'vue-rx'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'
import axios from "axios"
// import './assets/iconfont/iconfont.css'
import './assets/iconclose/iconfont.css'
Vue.use(VueRx)
Vue.use(ElementUi)
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
