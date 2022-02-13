import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
// echarts
import * as echarts from 'echarts';//引入echarts
Vue.prototype.$echarts = echarts //引入组件
// 应用拦截js
import '@/permission'



Vue.use(Element, { locale })
Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
