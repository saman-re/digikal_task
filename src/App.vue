<template>
  <div>
    <div class="multi-range-slider"></div>
    <input type="range" id="input-left" min="0" max="100" v-model="left" />
    <input type="range" id="input-right" min="0" max="100" v-model="right" />
    <p>{{ left }}</p>
    <p>{{ right }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      left: 0,
      right: 100,
    };
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
