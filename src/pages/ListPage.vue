<template>
  <div>
    <p>this is the list page</p>
    <toggler @toggle="hasSellingStock = $event"></toggler>
    <SortBar @sortOption="sortCode = $event" />
    <pagination @getPage="currentPage = $event" :totalPages="totalPage"></pagination>
    <txtField></txtField>
    <p>{{ sortCode }},,{{ hasSellingStock }},,{{ currentPage }}</p>
  </div>
</template>

<script>
import Toggler from '@/components/toggler.vue';
import SortBar from '../components/SortBar.vue';
import Pagination from '../components/pagination.vue';
import Axios from '../api/axios_config';
import axios from 'axios';
import txtField from '../components/txtField.vue'
export default {
//   async fetch() {
//     let data = await Axios.get('search/?page=2&rows=25&price[min]=0&price[max]=100000&has_selling_stock=1&sort=4');
//     console.log('this:', data);
//   },
  created() {
    axios.get('https://www.digikala.com/front-end/search/?page=2&rows=25&price[min]=0&price[max]=100000&has_selling_stock=1&sort=4&q=سیب',{
        headers:{
            token: 'mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv',
        }
    }).then(
        res=>{
            console.log("this",res);
        }
    ).catch(err=>{
        console.log("this:",err);
    })
  },
  data() {
    return {
      sortCode: 0,
      hasSellingStock: false,
      currentPage: 1,
      totalPage: 10,
    };
  },
  components: {
    toggler: Toggler,
    SortBar,
    Pagination,
    txtField
  },
};
</script>
