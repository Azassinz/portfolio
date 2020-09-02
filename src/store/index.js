import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locale: "en",
  },
  getters: {
    locale: state => state.locale,
},
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
