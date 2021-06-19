import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    params: {
      sort: 4,
      has_selling_stock: false,
      page: 2,
      rows: 21,
      'price[min]': 0,
      'price[max]': 100000,
      query: '',
    },
    totalPages:10,
    tempMinPrice:0,
    tempMaxPrice:100000
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
    setTempMin:(state,value) =>{
        state.tempMinPrice=value;
    },
    setTempMax:(state,value) =>{
        state.tempMaxPrice=value;
    },
    setPriceMin:(state,value)=>{
        state.params['price[min]']=value;
    },
    setPriceMax:(state,value)=>{
        state.params['price[max]']=value;
    },
    setSortCode(state,value){
        state.params.sort=value;
    }
  },
});

//to use store this.$store.state;
