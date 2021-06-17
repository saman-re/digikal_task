<template>
  <div>
    <tool-bar class="main-toolbar"></tool-bar>
    <!-- <slider style="margin-top:20px;margin-right:20px"/> -->
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/Toolbar.vue';

export default {
  name: 'App',
  
  components: {
    ToolBar,
  },
};
</script>

<style lang="scss">
@import './assets/_variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Markazi+Text&display=swap');
body,
html {
  font-family: 'Markazi Text', Arial, Helvetica, sans-serif, sans-serif;
  font-weight: 550;
  font-size: 21px;
  margin: 0;
  line-height: 0;
  direction: rtl;
  scroll-behavior: smooth;
  background-color: $base-color;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main-toolbar {
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
}
</style>
