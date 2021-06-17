<template>
  <div class="main-container">
    <loader v-if="loader"></loader>
    <dialog-box v-show="dialog.show" @close="dialog.show = $event" :slotName="dialog.slot">
      <div slot="range">
        <price-range-box @setRange="setPrice($event)" class="dialog-price-range" />
        <toggle-box class="dialog-toggle" />
      </div>
      <multi-select slot="select"></multi-select>
    </dialog-box>
    <div class="sort-box" style="margin-top: 40px; margin-bottom: 40px">
      <price-range-box @setRange="setPrice($event)" />
      <toggle-box />
    </div>
    <product-box class="product-box" :products="products" :totalPages="totalPage" style="margin-top: 40px; margin-bottom: 40px" />
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue';
import ToggleBox from '@/components/toggle-box';
import PriceRangeBox from '@/components/priceRange-box.vue';
import ProductBox from '@/components/product-box.vue';
import DialogBox from '@/components/dialog-box.vue';
import multiSelect from '../components/multiSelect.vue';

import { searchWatcher } from '@/main';
import Axios from '@/api/axios_config';

export default {
  created() {
    searchWatcher.$on('getSortCode', () => {
      searchWatcher.$emit('getDefault', this.params.sortCode);
    });
    searchWatcher.$on('getToggleMode',()=>{
      searchWatcher.$emit('setDefaultToggle',this.params.sellingStock);
    })
    searchWatcher.$on('setSlot', slotName => {
      this.dialog.slot = slotName;
      this.dialog.show = true;
    });
    searchWatcher.$on('re-search', () => {
      this.fetchData();
    });
    searchWatcher.$on('toggle', sellingStock => {
      this.params.hasSellingStock = sellingStock;
    });
    searchWatcher.$on('sortOption', sortCod => {
      this.params.sortCode = sortCod;
    });
    if (this.$route.query.search) {
      this.params.query = this.$route.query.search;
    }
    if (this.$route.query.page) {
      this.params.currentPage = this.$route.query.page;
    }
    this.fetchData();
  },

  data() {
    return {
      dialog: {
        slot: '',
        show: false,
      },
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
      this.params.currentPage = this.$route.query.page;
      if (newRoute.search) {
        this.params.query = this.$route.query.search;
      }
      this.fetchData();
    },
    'params.sortCode'() {
      setTimeout(() => {
        this.dialog.show = false;
      }, 500);
      searchWatcher.$emit('getDefault', this.params.sortCode);
      this.fetchData();
    },
    'params.hasSellingStock'() {
      setTimeout(() => {
        this.dialog.show = false;
      }, 500);
      this.fetchData();
    },
    'params.currentPage'() {
      this.fetchData();
    },
    'params.minPrice'() {
      setTimeout(() => {
        this.dialog.show = false;
      }, 500);
      this.fetchData();
    },
    'params.maxPrice'() {
      setTimeout(() => {
        this.dialog.show = false;
      }, 500);
      this.fetchData();
    },
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
        sort:this.params.sortCode,
        'price[min]': this.params.minPrice,
        'price[max]': this.params.maxPrice,
      };
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
    },
  },
  components: {
    Loader,
    ToggleBox,
    PriceRangeBox,
    ProductBox,
    DialogBox,
    multiSelect,
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  padding: 0 8px;

  @media (max-width: 1050px) {
    flex-direction: column;
    align-items: center;
  }

  .sort-box {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 0px 12px;
    @media (max-width: 1050px) {
      display: none;
    }
  }
}
</style>
