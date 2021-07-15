const state = () => ({
  user: {},
})

const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
}

const actions = {
  setUser({ commit }, payload) {
    commit('setUser', payload)
  },
}

const getters = {
  getUser: (state) => state.user,
}

export { state, mutations, actions, getters }
