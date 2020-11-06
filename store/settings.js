export const state = () => ({
  allCategories: null,
  allServices: null,
})

export const mutations = {
  setCategories(state, data) {
    state.allCategories = data
  },
  setServices(state, data) {
    state.allServices = data
  },
  setNewCategory(state, data) {
    data.forEach(element => {
      state.allCategories.push(element);
    })
  },
  setNewService(state, data) {
    data.forEach(element => {
      state.allServices.push(element);
    })
  }
}

export const getters = {
  allCategories: state => state.allCategories,
  allServices: state => state.allServices
}

export const actions = {
  async getCategories({commit}) {
   const resp = await this.$axios.get('http://localhost:3000/api/categories/').then(resp => {
      commit('setCategories', resp.data)
    })
  },

  async getBlanks({commit}, id) {
    const resp = await this.$axios.get("cp/tickets/vt-ticket-blank/blanks?id=" + id)
    commit('setBlanks', resp.data)
  }
}
