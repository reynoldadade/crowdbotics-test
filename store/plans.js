const state = () => ({
  plans: [],
})

const mutations = {
  setPlans(state, payload) {
    state.plans = payload
  },
}

const actions = {
  setPlans({ commit }, payload) {
    commit('setPlans', payload)
  },
}

const getters = {
  getPlans: (state) => state.plans,
}

export { state, mutations, actions, getters }
