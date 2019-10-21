import Vue from 'vue'
import Vuex from 'vuex'
import messages from './modules/messages'
import exch from './modules/exch'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    messages,exch
  }
})