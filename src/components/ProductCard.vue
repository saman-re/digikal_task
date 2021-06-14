<template>
  <div class="product-card">
    <div class="main-images">
      <img
        id="blue"
        class="blue"
        :src="product.images.main"
        alt="blue"
      />
    </div>
    <div class="shoe-details">
      <span class="shoe_name">{{product.title}}</span>
      <div class="stars">
        <span class="count">({{product.rating.count}})</span>
        <span class="rating">{{product.rating.rate}}</span>
        <i class="material-icons">star_rate</i>
      </div>
    </div>
    <div class="price">
      <span class="price_num">{{product.price.selling_price}} <span class="price_unit" style="">تومان</span></span>
    </div>
  </div>
</template>

<script>
export default {
    props:["product"],
}
</script>

<style lang="scss" scoped>
@import '../assets/_variables.scss';
.product-card {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  max-width: 250px;
  width: 100%;
  border: $border;
  border-color: $box-border-color;
  padding: 10px 14px 45px;
  background: #fff;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  z-index: 3;
  overflow: hidden;

  .main-images {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 210px;
    margin-bottom: 10px;

    img {
      height: 100%;
      width: 80%;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
}

.shoe_name {
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  color: #161616;
}

.stars {
  text-align: left;

  i {
    margin: 0 -1px;
    margin-right: 0px;
    color: #fac74b;
    font-size: 16px;
  }
}

.rating {
  color: #81858b;
  position: relative;
  padding-left: 0px;
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
  margin-top: 10px;
}

.price_num {
  margin-top: 10px;
  font-size: 22px;
  font-weight: 620;
  color: #434242;
}
.price_unit{
    font-size:18px;
    font-weight:570;
}
</style>
