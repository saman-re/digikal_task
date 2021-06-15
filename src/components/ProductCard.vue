<template>
  <div class="product-card">
    <div class="main-images">
      <img id="blue" class="blue" :src="product.images.main" alt="blue" />
    </div>
    <div class="product-details">
      <span class="product-name">{{ product.title }}</span>
      <div class="stars">
        <span class="count">({{ toPersianDigits(product.rating.count) }})</span>
        <span class="rating">{{ toPersianDigits(product.rating.rate) }}</span>
        <i class="material-icons">star_rate</i>
      </div>
    </div>
    <div class="price">
      <div v-if="product.status == 'marketable'">
        <div v-show="selling != rrp" class="rrp">
          <span class="off-percent">%{{ toPersianDigits(offCalc()) }}</span>
          <span class="rrp-price">{{ toPersianDigits(rrp) }}</span>
        </div>
        <div class="price-num">
          <span>{{ toPersianDigits(selling) }}</span>
          <div class="price-unit">تومان</div>
        </div>
      </div>
      <div v-else class="out-of-stock">
        <div class="out-of-stock_text">نا مو جود</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.product);
  },
  props: ['product'],
  data() {
    return {
      rrp: this.product.price.rrp_price,
      selling: this.product.price.selling_price,
    };
  },
  methods: {
    offCalc() {
      let offPercent = 100 - (this.selling / this.rrp) * 100;
      return Math.round(offPercent);
    },
    toPersianDigits(item) {
      let str = item.toString();
      var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
      return str.replace(/[0-9]/g, w => id[+w]);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/_variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Lemonada:wght@400;500&display=swap');

.product-card {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  max-width: 220px;
  width: 100%;
  border: $border;
  border-color: $box-border-color;
  padding: 10px 14px 45px;
  background: #fff;
  z-index: 3;
  overflow: hidden;

  &:hover {
    -webkit-box-shadow: 0 2px 17px 0 rgba($color: #000000, $alpha: 0.1);
    box-shadow: 0 2px 17px 0 rgba($color: #000000, $alpha: 0.1);
    cursor: pointer;
    z-index: 11;
  }
  .main-images {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 200px;
    margin-bottom: 13px;

    img {
      height: 100%;
      width: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
}

.product-details {
  height: 90px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-top: 10px;
}

.product-name {
  font-size: 1rem;
  font-weight: 550;
  line-height: 22px;
  color: #161616;
}

.stars {
  text-align: left;

  i {
    margin: 0;
    margin-right: 0px;
    color: #fac74b;
    font-size: 17px;
  }
}

.rating {
  color: #81858b;
  position: relative;
  padding-left: 0px;
  margin-right: 2px;
}

.count {
  color: #c0c2c5;
  font-size: 10px;
  font-size: 0.714rem;
  line-height: 2.2;
}

.price {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 20px;

  div {
    line-height: 26px;
  }
}
.rrp {
  text-align: end;
  .off-percent {
    background-color: $primary;
    border-radius: 18px;
    padding: 0px 10px;
    font-size: 0.9rem;
    font-weight: 600;
    color: rgba(255, 244, 244, 0.967);
  }
  .rrp-price {
    padding: 0 5px;
    margin-right: 15px;
    font-weight: 100;
    text-decoration: line-through;
    color: lighten($color: #434242, $amount: 30);
  }
}

.price-num {
  display: inline-block;
  font-size: 26px;
  font-weight: 650;
  letter-spacing: 1.2px;
  color: #434242;
}

.price-unit {
  display: inline-block;
  padding-right: 6px;
  font-size: 22px;
  font-weight: 570;
  letter-spacing: 0.8px;
}

.out-of-stock {
  margin-bottom: 20px;
  border-bottom: 2px solid #969696;
  position: absolute;
  left: 17px;
  right: 17px;
  text-align: center;
}

.out-of-stock_text {
  z-index: 20;
  background-color: #fff;
  position: absolute;
  height: 15px;
  vertical-align: middle;
  padding: 0px 10px;
  bottom: -12px;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  font-family: 'Lemonada', cursive;
  font-size: 17px;
  color: #969696;
}
</style>
