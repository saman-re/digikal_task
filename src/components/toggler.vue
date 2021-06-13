<template>
  <div>
    <input type="checkbox" id="switch" @change="toggle" v-model="toggleMode" />
    <label for="switch">Toggle</label>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toggleMode: true,
    };
  },
  methods: {
    toggle() {
      this.$emit('toggle', this.toggleMode);
    },
  },
};
</script>
<style lang="scss">
@import "../assets/_variables.scss";

input[type='checkbox'] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 200px;
  height: 100px;
  background: grey;
  display: block;
  border-radius: 100px;
  position: relative;
}

label:after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: 90px;
  height: 90px;
  background: #fff;
  border-radius: 90px;
  transition: 0.3s;
}

input:checked + label {
  background: $primary;
}

input:checked + label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}

label:active:after {
  width: 90px;
}
</style>
