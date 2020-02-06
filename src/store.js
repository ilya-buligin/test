import Vue from 'vue';
import Vuex from 'vuex';

import mock from './mock';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    getItems() {
      return new Promise(resolve => {
        setTimeout(() => resolve(mock), 2000);
      });
    },
  },
  modules: {},
});
