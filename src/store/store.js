import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    params: {
      sortCode: 4,
      hasSellingStock: false,
      currentPage: 1,
      minPrice: 0,
      maxPrice: 100000,
      query: '',
    },
  },
  getters: {
    getParams: state => {
      return state.params;
    },
  },
  mutations: {
    toggle: (state, payload) => {
      state.params.hasSellingStock = payload;
    },
  },
});

//to use store this.$store.state;
