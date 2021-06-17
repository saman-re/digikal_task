<template>
  <div class="dialog">
    <div class="dialog-bg"></div>
    <slot :name="slotName"></slot>
    <i class="material-icons close-icon" @click="$emit('close',false)">add_circle</i>
  </div>
</template>
<script>
export default {
    props:["slotName"],
}
</script>

<style lang="scss" scoped>
  @import '../assets/_variables.scss';

.dialog {
  position: fixed;
  z-index: 999999;
  background: rgba(32, 32, 32, 0.446);
  width: 100%;
  height: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .dialog-toggle,
  .dialog-price-range {
    margin: 0;
    border-radius: 0;
  }
  .dialog-toggle {
    padding: 16px 6px 16px 20vw;
    border-radius: 0px 0px 20px 20px;
  }
  .dialog-price-range {
    border-radius: 20px 20px 0 0;
  }
  .close-icon {
    // transform: translate();
    cursor: pointer;
    color: darken($box-border-color, 50%);
    transform: translate(43px, -156px) rotate(45deg);
  }
}
</style>
