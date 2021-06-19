<template>
  <div class="toggler">
    <input type="checkbox" id="switch" v-model="toggleMode" />
    <label for="switch">Toggle</label>
  </div>
</template>
<script>
export default {
  computed:{ 
    toggleMode:{
      get(){
        return this.$store.state.hasSellingStock;
      },
      set(value){
        this.$store.commit('toggle',value);
        this.$store.dispatch('getProduct');
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../assets/_variables.scss';

$toggle-width: 40px;
$toggle-height: 21px;
$pin-size: 15px;
$spacing: 4px;

.toggler {
  display: flex;
  align-items: center;
}
input {
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + label {
    background: $primary;
  }

  &:checked + label::after {
    right: calc(100% - 2.5px);
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%);
  }
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: $toggle-width;
  height: $toggle-height;
  background: $base-color;
  display: block;
  border: $border;
  border-radius: $toggle-height;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: $spacing/2;
    right: $spacing/2;
    width: $pin-size;
    height: $pin-size;
    background: #fff;
    border: $border;
    border-radius: $pin-size;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
  }
}
</style>
