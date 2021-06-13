<template>
  <div class="right-inner-addon input-container">
    <i class="fa fa-search"></i>
    <input type="text" class="form-control" placeholder="Right icon" />
  </div>
</template>
<style lang="scss" scoped>
.input-container {
  padding-bottom: 1em;
}

.right-inner-addon {
  position: relative;
}
.right-inner-addon input {
  padding-right: 35px !important;
}
.right-inner-addon i {
  position: absolute;
  right: 0px;
  padding: 12px 12px;
  pointer-events: none;
}
input {
  width: 100%;
  padding: 1em !important;
  margin: 0em !important;
  box-sizing: border-box;
}
</style>
