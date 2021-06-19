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
    <product-box class="product-box" style="margin-top: 40px; margin-bottom: 40px" />
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

export default {
  created() {
    searchWatcher.$on('setSlot', slotName => {
      this.dialog.slot = slotName;
      this.dialog.show = true;
    });
    this.fetchData();
  },
  data() {
    return {
      dialog: {
        slot: '',
        show: false,
      },
    };
  },
  watch: {
    '$store.state.params.sort'() {
      setTimeout(() => {
        this.dialog.show = false;
      }, 400);
    },
  },
  computed: {
    loader() {
      return this.$store.state.loader;
    },
  },
  methods: {
    async fetchData() {
      this.$store.dispatch('getProduct');
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
