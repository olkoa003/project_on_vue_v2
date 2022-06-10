import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import modal from './plugins/ModalWindow'
import contextMenu from './plugins/ContextMenu'

Vue.config.productionTip = false
Vue.use(modal)
Vue.use(contextMenu)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
