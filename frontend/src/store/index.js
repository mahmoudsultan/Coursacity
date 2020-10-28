import Vuex from 'vuex';
import Vue from 'vue';

import notifications from './modules/notifications';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    notifications
  }
});
