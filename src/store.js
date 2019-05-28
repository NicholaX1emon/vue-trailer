import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bloglist: []
  },
  mutations: {
    addBlog (state, newBlog) {
      state.bloglist.push(newBlog)
    },
    setCurrentBlog (state, newCurrentBlog) {
      state.currentBlog = newCurrentBlog
    }
  },
  actions: {

  }
})
