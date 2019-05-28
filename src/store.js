import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bloglist: [],
    currentBlog: null
  },
  mutations: {
    addBlog (state, newBlog) {
      state.bloglist.push(newBlog)
    },
    setCurrnetBlog (state, newCurrentBlog) {
      console.log(222)
      state.currentBlog = newCurrentBlog
    }
  },
  actions: {

  }
})
