const state = () => ({
  showLoader: false,
})

const mutations = {
  setLoader(state, payload) {
    state.showLoader = payload
  },
}

const actions = {
  setLoader({ commit }, payload) {
    commit('setLoader', payload)
  },
}

const getters = {
  getLoader: (state) => state.showLoader,
}

export { state, mutations, actions, getters }
