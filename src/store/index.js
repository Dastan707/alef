import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    childrens: []
  },
  mutations: {
    setAddChild (state, payload) {
      if (state.childrens.length <= 4) {
        state.childrens.push(payload)
      }
    },
    setDeleteChild (state, id) {
      state.childrens = state.childrens.filter(item => item.id !== id)
    },
    setSaveUser (state, payload) {
      state.user = payload
    },
    setSaveChild (state, payload) {
      state.childrens = payload
    }
  },
  actions: {
    addChild ({ commit }, newObj) {
      commit('setAddChild', newObj)
    },
    deleteChild ({ commit }, childId) {
      commit('setDeleteChild', childId)
    },
    saveUser ({ commit }, credentials) {
      commit('setSaveUser', credentials)
    },
    saveChild ({ commit }, credentials) {
      commit('setSaveChild', credentials)
    }
  },
  getters: {
    user: state => state.user,
    childrens: state => state.childrens
  },
  modules: {
  }
})
