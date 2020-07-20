export const state = () => ({
  sidebar: false,
})

export const mutations = {
  SET_SIDEBAR(state) {
    state.sidebar = !state.sidebar
  },
}
