import Vue from 'vue'
import Vuex from 'vuex'

import videoSearch from './modules/video-search'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    videoSearch
  }
})

export default store
