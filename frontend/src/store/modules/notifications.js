const state = () => ({
  snackbar: {
    message: '',
    color: '',
  },
});

const mutations = {
  SET_NOTIFICATION: (state, { message, color }) => state.snackbar = { message, color }
};

const actions = {
  success: ({ commit }, message) => {
    commit('SET_NOTIFICATION', { message, color: 'success' });
  },
  error: ({ commit }, message) => {
    commit('SET_NOTIFICATION', { message, color: 'error' });
  },
  info: ({ commit }, message) => {
    commit('SET_NOTIFICATION', { message, color: 'info' });
  },
  notify: ({ commit }, message, color) => {
    commit('SET_NOTIFICATION', { message, color });
  }
};

const getters = {
  notification: (state) => state.snackbar,
};

export default {
  state,
  mutations,
  actions,
  getters
};

