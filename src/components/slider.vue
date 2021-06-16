<template>
  <div class="middle">
    <div class="multi-range-slider">
      <input type="range" id="input-left" :min="left_min" :max="left_max" v-model="leftValue" @input="setLeftValue" />
      <input type="range" id="input-right" :min="right_min" :max="right_max" v-model="rightValue" @input="setRightValue" />
      setLeftValue
      <div class="slider">
        <div class="track"></div>
        <div class="range" :style="`left:${thumbLeft_percent}%;right:${thumbRight_percent}%`"></div>
        <div class="thumb left" :style="`left:${thumbLeft_percent}%`"></div>
        <div class="thumb right" :style="`right:${thumbRight_percent}%`"></div>
      </div>
    </div>
    <!-- <p>value -min -max-thumbP</p> -->
    <p>LV:{{ leftValue }},,Mi{{ left_min }},,Ma:{{ left_max }},,LP{{ thumbLeft_percent }}</p>
    <p>RV:{{ rightValue }},,Mi:{{ right_min }},,Ma:{{ right_max }},,RP:{{ thumbRight_percent }}</p>
  </div>
</template>

<script>
export default {
  created() {
    this.setLeftValue();
    this.setRightValue();
  },
  data() {
    return {
      leftValue: 25,
      left_min: 0,
      left_max: 100,
      thumbLeft_percent: 0,
      rightValue: 75,
      right_min: 0,
      right_max: 100,
      thumbRight_percent: 0,
    };
  },
  methods: {
    setLeftValue() {
      let min = parseInt(this.left_min),
        max = parseInt(this.left_max);

      this.leftValue = Math.min(this.leftValue, this.rightValue - 1);

      let percent = ((this.leftValue - min) / (max - min)) * 100;
      this.thumbLeft_percent = parseInt(percent);
    },
    setRightValue() {
      let min = this.right_min,
        max = this.right_max;

      this.rightValue = Math.max(this.rightValue, this.leftValue + 1);

      let percent = ((this.rightValue - min) / (max - min)) * 100;
      this.thumbRight_percent = 100 - parseInt(percent);
    },
  },
};
</script>

<style lang="scss" scoped>
.middle {
  position: relative;
  width: 50%;
  max-width: 500px;
}

.slider {
  position: relative;
  z-index: 1;
  height: 10px;
  margin: 0 15px;
}
.slider > .track {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: #c6aee7;
}
.slider > .range {
  position: absolute;
  z-index: 2;
  left: 25%;
  right: 25%;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: #6200ee;
}
.slider > .thumb {
  position: absolute;
  z-index: 3;
  width: 30px;
  height: 30px;
  background-color: #6200ee;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(98, 0, 238, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}
.slider > .thumb.left {
  left: 25%;
  transform: translate(-15px, -10px);
}
.slider > .thumb.right {
  right: 25%;
  transform: translate(15px, -10px);
}

input[type='range'] {
  position: absolute;
  pointer-events: none;
  //   -webkit-appearance: none;
  z-index: 2;
  height: 10px;
  width: 100%;
  //   opacity: 0;
}
input[type='range']::-webkit-slider-thumb {
  pointer-events: all;
  width: 30px;
  height: 30px;
  border-radius: 0;
  border: 0 none;
  background-color: red;
  -webkit-appearance: none;
}
#input-right {
  background-color: blue;
  top: 65px;
}
#input-left {
  top: 100px;
}
</style>
