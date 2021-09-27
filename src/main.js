import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
Vue.prototype.$hunstats= Vue.observable({huf: 0, hufinf:0, hungr: 0});
Vue.prototype.$eventBus = new Vue()
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
