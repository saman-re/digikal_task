<template>
  <div class="right-inner-addon input-container">
    <i class="material-icons search-icon">search</i>
    <input class="search-input" type="text" placeholder="جستجو کنید" />
  </div>
</template>
<style lang="scss" scoped>
@import '../assets/_variables.scss';

.input-container {
  position: relative;
  padding-bottom: 1em;

  .search-input {
    width: 100%;
    padding: 1.2em;
    padding-right: 35px;
    margin: 0em;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    direction: rtl;
    border-radius: 10px;
    background-color: $base-color;
    border: $box-border-color;

    &:focus-visible {
      outline: none;
    }
  }

  .search-icon {
    position: absolute;
    right: 0px;
    padding: 12px 12px;
    pointer-events: none;
    color: darken($box-border-color, 40%);
  }
}
</style>
