<template>
  <div class="toggle-box">
    <toggler />
    <span>فقط کالاهای موجود</span>
  </div>
</template>
<script>
import toggler from './toggler.vue';

export default {
  components: {
    toggler,
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/_variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Almarai&display=swap');

.toggle-box {
  display: flex;
  max-width: 400px;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 16px 10px 16px 0.1vw;
  margin: 8px 0;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  font-family: 'Almarai', sans-serif;
  color: lighten($color: #000000, $amount: 27);
  border-radius: 10px;
  -webkit-box-shadow: 0 2px 4px 0 rgba($color: #000000, $alpha: 0.07);
  box-shadow: 0 2px 4px 0 rgba($color: #000000, $alpha: 0.07);
  background: #fff;
  border: $border;
  border-color: $box-border-color;
  @media (min-width: 1050px) {
    padding: 16px 10px 16px 6vw;
  }
  @media (min-width: 1200px) {
    padding: 16px 6px 16px 10.4vw;
  }

  span {
    padding-right: 4px;
    font-size: 17px;
    font-weight: 550;

    @media (min-width: 1050px) {
        font-size: 13px;
        font-weight: 600;
    }
    @media (min-width: 1200px) {
        font-size: 14px;
        font-weight: 600;
    }
  }
}
</style>
