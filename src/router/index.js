import Vue from "vue";
import VueRouter from "vue-router";

import ListPage from '../pages/ListPage.vue';
import DetailsPage from '../pages/DetailsPage';

Vue.use(VueRouter);

const routes = [
  { path: '', component: ListPage, name: 'home_page' },
  { path: '/Detaild', component: DetailsPage , name: 'product_page' },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
