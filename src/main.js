import Vue from 'vue'
import App from '@/App.vue'

import router from '@/router'
import store from '@/store' 
Vue.config.productionTip = false
import axios from 'axios'

Vue.prototype.$http = axios
//Vue.use(axios)

const vue = new Vue({
    store,router,
  render: h => h(App)
})

vue.$mount('#app')
