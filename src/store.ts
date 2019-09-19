import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    wallets: [],
    wallet: {}
  },
  getters: {
    getWallet: state => index => {
      return state.wallets[index]
    },
    getWallets (state) {
      return state.wallets
    }
  },
  mutations: {
    addWallet (state, payload) {
      state.wallets.push(payload)
    },
    setWallet (state, payload) {
      state.wallet = payload
    }
  },
  actions: {
    addWallet ({ commit }, payload) {
      commit('addWallet', payload)
    },
    setWallet ({ commit }, payload) {
      commit('setWallet', payload)
    }
  }
});
