import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

export const store =new Vuex.Store({
    state:{
        counter:1
    }
});

//to use store this.$store.state; 