import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: [],
    users: []
  },
  mutations: {
    addBlog (state, newBlog) {
      state.lists.push(newBlog)
    },
    deleteBlog (state, index) {
      state.lists.splice(index, 1)
    },
    addUser (state, newUser) {
      state.users.push(newUser)
    },
    getLocalUsers (state) {
      if (localStorage.getItem('users')) {
        state.users = JSON.parse(localStorage.getItem('users'))
      }
    },
    getLocalLists (state) {
      if (localStorage.getItem('bloglists')) {
        state.users = JSON.parse(localStorage.getItem('bloglists'))
      }
    }
  },
  getters: {
    ownLists (state) {
      return state.lists.filter(item => item.user === sessionStorage.getItem('currentUser'))
    }
  },
  actions: {

  }
})
