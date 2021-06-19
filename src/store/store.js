import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    params: {
      sortCode: 4,
      has_selling_stock: false,
      page: 2,
      rows: 21,
      'price[min]': 0,
      'price[max]': 100000,
      query: '',
    },
    totalPages:10,
  },
  getters: {
    getParams: state => {
      return state.params;
    },
  },
  mutations: {
    toggle: (state, payload) => {
      state.params.has_selling_stock = payload;
    },
    changePage: (state, newPage) => {
      state.params.page =newPage;
    },
  },
});

//to use store this.$store.state;
