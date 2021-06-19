import Vue from 'vue';
import Vuex from 'vuex';
import {PLP} from '@/api/apis.js'
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    params: {
      sort: 4,
      page: 2,
      rows: 21,
      'price[min]': 0,
      'price[max]': 100000,
    },
    hasSellingStock: false,
    query: '',
    totalPages: 1,
    tempMinPrice: 0,
    tempMaxPrice: 100000,
    products: [],
    loader:false,
  },
  getters: {
    getParams: state => {
      return state.params;
    },
  },
  mutations: {
    toggle: (state, payload) => {
      state.hasSellingStock=payload;
    },
    changePage: (state, newPage) => {
      state.params.page = newPage;
    },
    totalPage(state,totalPages){
        state.totalPages=totalPages;
    },
    setTempMin: (state, value) => {
      state.tempMinPrice = value;
    },
    setTempMax: (state, value) => {
      state.tempMaxPrice = value;
    },
    setPriceMin: (state, value) => {
      state.params['price[min]'] = value;
    },
    setPriceMax: (state, value) => {
      state.params['price[max]'] = value;
    },
    setSortCode(state, value) {
      state.params.sort = value;
    },
    setSearchQuery(state, searchKey) {
      state.query = searchKey;
    },
    setProducts(state,products){
        state.products = products;
    }
  },
  actions: {
    async getProduct({ commit ,state}) {
        state.loader=true;
        let params =state.params;
        if(state.hasSellingStock){
            params.has_selling_stock = 1;
        }
        if(state.query){
            params.q = state.query;
        }
      let data =await PLP(state.params);
      data = data.data.data;
      commit('totalPage',data.pager.total_pages);
      commit('setProducts',data.products);
      state.loader=false;
    },
  },
});
