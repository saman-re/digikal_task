import Vue from "vue";
import VueRouter from "vue-router";

import ListPage from '../pages/ListPage.vue';
import DetailsPage from '../pages/DetailsPage';

Vue.use(VueRouter);

const routes = [
  { path: '', component: ListPage, name: 'home_page' },
  { path: '/detaild', component: DetailsPage , name: 'product_page' },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(){
    return {x:0 ,y:0};
  },
  routes,
});

export default router;
