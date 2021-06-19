<template>
  <div class="price-range">
    <div class="title">محدوده قیمت</div>
    <div class="slider-box">
      <slider />
    </div>
    <div class="bounds">
      <div class="upper-bound">
        <span>از</span>
        <div class="price">
          {{ piriceDivider(minPrice) }}
        </div>
        <span>تومان</span>
      </div>
      <div class="lower-bound">
        <span>تا</span>
        <div class="price">
          {{ piriceDivider(maxPrice) }}
        </div>
        <span>تومان</span>
      </div>
    </div>
    <div class="confirm-box">
      <button
        class="confirm-button"
        @click="setRange"
        :class="{ disabled: this.lastMin == this.minPrice && this.lastMax == this.maxPrice }"
      >
        <i class="material-icons">filter_alt</i>
        <span>اعمال محدوده قیمت</span>
      </button>
    </div>
  </div>
</template>

<script>
import slider from './slider.vue';

export default {
  computed: {
    minPrice(){
        return this.$store.state.tempMinPrice;
      },
    maxPrice(){
        return this.$store.state.tempMaxPrice;
      },
    lastMin: {
      get() {
        return this.$store.getters.getParams['price[min]'];
      },
      set(value) {
        this.$store.commit('setPriceMin',value)
      },
    },
    lastMax: {
      get() {
        return this.$store.getters.getParams['price[max]'];
      },
      set(value) {
        this.$store.commit('setPriceMax',value)
      },
    },
  },
  methods: {
    setRange() {
      this.lastMin = this.minPrice;
      this.lastMax = this.maxPrice;
    },
    toPersianDigits(item) {
      let str = item.toString();
      var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
      return str.replace(/[0-9]/g, w => id[+w]);
    },
    piriceDivider(price) {
      price = price.toLocaleString();
      return this.toPersianDigits(price);
    },
  },
  components: {
    slider,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/_variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Almarai&display=swap');

.price-range {
  max-width: 400px;
  box-sizing: border-box;
  margin: 8px 0px;
  margin-top: 0;
  -webkit-box-shadow: 0 2px 4px 0 rgba($color: #000000, $alpha: 0.07);
  box-shadow: 0 2px 4px 0 rgba($color: #000000, $alpha: 0.07);
  border-radius: 10px;
  background: #fff;

  .title {
    font-family: 'Almarai', sans-serif;
    line-height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: lighten($color: #000000, $amount: 27);
    padding: 13px 20px;
    line-height: 20px;

    @media (min-width: 1050px) {
      font-size: 14px;
      font-weight: 600;
    }
    @media (min-width: 1200px) {
      font-size: 15px;
      font-weight: 600;
    }
  }

  .slider-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border: $border;
    border-color: $box-border-color;
    height: 4em;
  }
  .bounds {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    .lower-bound,
    .upper-bound {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: calc(100% / 2);
      align-items: center;
      border: $border;
      line-height: 1.25;
      color: lighten($color: #000000, $amount: 50);
      border-color: $box-border-color;
      height: 5em;

      .price {
        margin: 10px 0px;
        color: lighten($color: #000000, $amount: 30);
        font-size: 24px;
      }
    }
  }
  .confirm-box {
    display: flex;
    justify-content: center;
    padding: 10px 32px;

    .confirm-button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $secondary;
      padding: 11px 20px;
      line-height: 20px;
      color: #fff;
      -webkit-box-shadow: 5px 5px 10px 0 rgba($color: #000000, $alpha: 0.22);
      box-shadow: 5px 5px 10px 0 rgba($color: #000000, $alpha: 0.22);
      -webkit-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;
      border-radius: 8px;
      border: $border;
      cursor: pointer;

      &:hover {
        background-color: lighten($secondary, $amount: 10);
      }
    }
    .disabled {
      cursor: inherit;
      background-color: lighten($base-color, $amount: 3);
      color: lighten($color: #000000, $amount: 70);
      box-shadow: none;
      cursor: default;

      &:hover {
        background-color: lighten($base-color, $amount: 3);
      }
    }
  }
}
</style>
