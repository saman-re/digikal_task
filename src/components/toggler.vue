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

$to-width:40px;
$to-height:21px;
$pin-size:15px;
$spacing:4px;
$border:1px solid #8c8c8c;

input[type='checkbox'] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: $to-width;
  height: $to-height;
  background: $base-color;
  display: block;
  border: $border;
  border-radius: $to-height;
  position: relative;
}

label:after {
  content: '';
  position: absolute;
  top: $spacing/2;
  right: $spacing/2;
  width: $pin-size;
  height: $pin-size;
  background: #fff;
  border: $border;
  border-radius: $pin-size;
  transition: 0.3s;
}

input:checked + label {
  background: $primary;
  
}

input:checked + label:after {
  right: calc(100% - 2.5px);
  transform: translateX(100%);
}

label:active:after {
  width: $pin-size;
}
</style>
