<template>
  <div class="middle">
    <div class="multi-range-slider">
      <input type="range" id="input-left" :min="Min" :max="Max" v-model="leftValue" @input="setLeftValue" />
      <input type="range" id="input-right" :min="Min" :max="Max" v-model="rightValue" @input="setRightValue" />
      <div class="slider">
        <div class="track"></div>
        <div class="range" :style="`left:${thumbLeft_percent}%;right:${thumbRight_percent}%`"></div>
        <div class="thumb left" :style="`left:${thumbLeft_percent}%`">
          <i class="material-icons">chevron_right</i>
        </div>
        <div class="thumb right" :style="`right:${thumbRight_percent}%`">
          <i class="material-icons">chevron_left</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.rightValue=this.$store.getters.getParams["price[max]"];
    this.leftValue=this.$store.getters.getParams["price[min]"];
    this.setLeftValue();
    this.setRightValue();
  },
  data() {
    return {
      thumbLeft_percent: 0,
      thumbRight_percent: 0,
      Min: 0,
      Max: 100000,
    };
  },
  computed: {
    rightValue: {
      get() {
        return this.$store.state.tempMaxPrice;
      },
      set(value) {
        this.$store.commit('setTempMax',value);
      }
    },
    leftValue:{
      get(){
        return this.$store.state.tempMinPrice;
      },
      set(value){
        this.$store.commit('setTempMin',value);
      }
    }
  },
  methods: {
    setLeftValue() {
      let min = parseInt(this.Min),
        max = parseInt(this.Max);

      this.leftValue = Math.min(this.leftValue, this.rightValue);

      let percent = ((this.leftValue - min) / (max - min)) * 100;
      this.thumbLeft_percent = parseInt(percent);
      // this.$emit('getBounds', [this.leftValue, this.rightValue]);
    },
    setRightValue() {
      let min = this.Min,
        max = this.Max;

      this.rightValue = Math.max(this.rightValue, this.leftValue);

      let percent = ((this.rightValue - min) / (max - min)) * 100;
      this.thumbRight_percent = 100 - parseInt(percent);
      // this.$emit('getBounds', [this.leftValue, this.rightValue]);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

.middle {
  position: relative;
  width: 70%;
  max-width: 500px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.slider {
  position: relative;
  z-index: 1;
  height: 2px;
  transform: rotate(180deg);
}
.slider > .track {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: darken($box-border-color, $amount: 10);
}
.slider > .range {
  position: absolute;
  z-index: 2;
  height: 100%;
  border-radius: 5px;
  background-color: $secondary;
}
.slider > .thumb {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  width: 34px;
  height: 34px;
  background-color: $box-border-color;
  border-radius: 50%;
  box-shadow: -2px 0px 6px 0 rgba($color: #000000, $alpha: 0.16);
}
.slider > .thumb.left {
  transform: translate(-15px, -15px);
}
.slider > .thumb.right {
  transform: translate(15px, -15px);
}

input[type='range'] {
  position: absolute;
  pointer-events: none;
  -webkit-appearance: none;
  z-index: 2;
  height: 0px;
  width: calc(100% + 17px);
  transform: translateX(10px);
  opacity: 0;
}
input[type='range']::-webkit-slider-thumb {
  pointer-events: all;
  width: 38px;
  height: 38px;
  border-radius: 0;
  border: 0 none;
  // background-color: red;
  -webkit-appearance: none;
}
</style>
