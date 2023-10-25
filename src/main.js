import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';//引入ElementUI
import 'element-ui/lib/theme-chalk/index.css';//引入ElementUI


import '@/assets/css/global.css'

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' });//引入ElementUI

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
