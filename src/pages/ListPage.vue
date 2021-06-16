<template>
  <div>
    <loader v-if="loader"></loader>
    <div class="sort-box">
    <price-range style="margin-top:40px" @setRange="setPrice($event)"/>
    <toggle-box/>    
    </div>
    <product-box :products="products" :totalPages="totalPage"/>
    <!-- <div class="product-box">
      <sort-bar class="product-sortbar" @sortOption="params.sortCode = $event" />
      <product-card v-for="(product, index) in products" :key="index" :product="product"></product-card>
      <pagination class="product-pagination" @getPage="params.currentPage = $event" :totalPages="totalPage"></pagination>
    </div> -->
  </div>
</template>



<script>
import productBox from "../components/productBox.vue";
// import productCard from '../components/ProductCard.vue';
import ToggleBox from '@/components/toggle-box';
// import SortBar from '../components/SortBar.vue';
// import Pagination from '../components/pagination.vue';
import Loader from '@/components/Loader.vue';
import priceRange from "@/components/priceRange.vue";

import { searchWatcher } from '../main';
import Axios from '../api/axios_config';
import PriceRange from '../components/priceRange.vue';

export default {
  async created() {
    searchWatcher.$on('re-search', () => {
      // this.params.query = searchKey;
      this.fetchData();
    });
    searchWatcher.$on('toggle', (sellingStock)=>{
      this.params.hasSellingStock=sellingStock;
    });
    searchWatcher.$on('sortOption',(sortCod) =>{
      this.params.sortCode = sortCod;
    })
    if (this.$route.query.search) {
      this.params.query = this.$route.query.search;
    }
    this.fetchData();
    // let data = await Axios.get('search/?page=2&rows=25&price[min]=0&price[max]=100000&has_selling_stock=1&sort=4');
    // console.log('this:', data);
  },

  data() {
    return {
      loader: false,
      products: [],
      totalPage: 1,
      params: {
        sortCode: 4,
        hasSellingStock: false,
        currentPage: 1,
        minPrice: 0,
        maxPrice: 100000,
        query: '',
      },
    };
  },
  watch: {
    '$route.query'(newRoute) {
      if (newRoute.search) {
        this.params.query = this.$route.query.search;
      }
      this.fetchData();
    },
    'params.sortCode'() {
      this.fetchData();
    },
    'params.hasSellingStock'() {
      this.fetchData();
    },
    'params.currentPage'() {
      this.fetchData();
    },
    'params.minPrice'(){
      this.fetchData();
    },
    'params.maxPrice'(){
      this.fetchData();
    }
  },
  methods: {
    setPrice(key) {
      this.params.minPrice = key[0];
      this.params.maxPrice = key[1];
    },
    async fetchData() {
      this.loader = true;
      let params = {
        page: this.params.currentPage,
        rows: 21,
        'price[min]': this.params.minPrice,
        'price[max]': this.params.maxPrice,
      };
      if (this.params.sortCode !== 1 && this.params.sortCode !== 2) {
        params.sort = this.params.sortCode;
      }
      if (this.params.query) {
        params.q = this.params.query;
      }
      if (this.params.hasSellingStock) {
        params.has_selling_stock = 1;
      }

      let data = await Axios.get('search/', {
        params,
      });
      this.loader = false;
      data = data.data.data;
      this.products = data.products;
      this.totalPage = data.pager.total_pages;
      if (this.params.sortCode === 1) {
        this.products = this.products.sort((a, b) => {
          return a.price.selling_price - b.price.selling_price;
        });
      } else if (this.params.sortCode === 2) {
        this.products = this.products.sort((a, b) => {
          return b.price.selling_price - a.price.selling_price;
        });
      }
    },
  },
  components: {
    ToggleBox,
    // SortBar,
    // Pagination,
    Loader,
    // productCard,
    priceRange,
    PriceRange,
    productBox
  },
};

//     axios.get('https://www.digikala.com/front-end/search/?page=2&rows=25&price[min]=0&price[max]=100000&has_selling_stock=1&sort=4&q=سیب',{
//         headers:{
//             token: 'mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv',
//         }
//     }).then(
//         res=>{
//             console.log("this",res);
//         }
//     ).catch(err=>{
//         console.log("this:",err);
//     })
</script>

<style lang="scss" scoped>
// @import '../assets/_variables.scss';

// .product-box {
//   width: max-content;
//   display: grid;
//   grid-template-columns: auto auto auto;
//   grid-gap: 0;
//   margin: 20px 30px;
//   -webkit-box-shadow: 0 2px 4px 0 rgba($color: #000000, $alpha: 0.07);
//   box-shadow: 0 2px 4px 0 rgba($color: #000000, $alpha: 0.07);

//   .product-sortbar {
//     grid-column: 1 / span 3;
//   }
//   .product-pagination {
//     grid-column: span 3;
//   }
// }
</style>