<template>
  <div class="product-box">
    <sort-bar class="product-sortbar" />
    <product-card v-for="(product, index) in products" :key="index" :product="product"></product-card>
    <pagination class="product-pagination" :totalPages="totalPages"></pagination>
  </div>
</template>

<script>
import productCard from './ProductCard.vue';
import SortBar from './SortBar.vue';
import Pagination from './pagination.vue';
export default {
  props: ['products', 'totalPages'],
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
  margin: 20px 30px;
  -webkit-box-shadow: 0 2px 4px 0 rgba($color: #000000, $alpha: 0.07);
  box-shadow: 0 2px 4px 0 rgba($color: #000000, $alpha: 0.07);

  .product-sortbar {
    grid-column: 1 / span 3;
  }
  .product-pagination {
    grid-column: span 3;
  }
}
</style>
