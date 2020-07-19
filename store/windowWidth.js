export const state = () => ({
  windowWidth: window.innerWidth,
})

export const mutations = {
  SET_WINDOWWIDTH(state, newWidth) {
    state.windowWidth = newWidth
  },
}
