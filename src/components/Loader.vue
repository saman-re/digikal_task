<template>
  <div class="loader-bg">
    <div class="loader-p"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

.loader-bg {
  position: fixed;
  z-index: 999999;
  background: rgba(32, 32, 32, 0.446);
  width: 100%;
  height: 100%;
  bottom: 0;

  .loader-p {
    border: 0 solid transparent;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    position: absolute;
    top: calc(50vh - 75px);
    left: calc(50vw - 75px);

    &::before,
    &::after {
      content: '';
      border: 1em solid $primary;
      border-radius: 50%;
      width: inherit;
      height: inherit;
      position: absolute;
      top: 0;
      left: 0;
      -webkit-animation: loader 2s linear infinite;
      animation: loader 2s linear infinite;
      opacity: 0;
    }
    &::before {
      -webkit-animation-delay: 0.5s;
      animation-delay: 0.5s;
    }
  }
}

@-webkit-keyframes loader {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes loader {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
</style>
