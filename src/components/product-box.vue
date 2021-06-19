<template>
  <div class="product-box">
    <sort-bar class="product-sortbar" />
    <product-card v-for="(product, index) in products" :key="index" :product="product" @click="send(product)"></product-card>
    <pagination class="product-pagination"></pagination>
  </div>
</template>

<script>
import productCard from './ProductCard.vue';
import SortBar from './SortBar.vue';
import Pagination from './pagination.vue';
export default {
  computed:{
    products(){
      return this.$store.state.products;
    }
  },
  methods:{
    send(product){
      console.log(product);
      this.$router.push(`/details/`)
    }
  },
  components: {
    productCard,
    SortBar,
    Pagination,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

.product-box {
  width: max-content;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 0;
  // margin: 20px 30px;
  -webkit-box-shadow: 0 2px 4px 0 rgba($color: #000000, $alpha: 0.07);
  box-shadow: 0 2px 4px 0 rgba($color: #000000, $alpha: 0.07);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .product-bar {
    grid-column: span 3;
    @media (max-width: 768px) {
      flex-direction: row;
      max-width: calc(100vw - 15px);
      box-sizing: border-box;
      align-self: stretch;
    }
  }

  .product-sortbar {
    @extend .product-bar;
  }
  .product-pagination {
    @extend .product-bar;
  }
}
</style>
