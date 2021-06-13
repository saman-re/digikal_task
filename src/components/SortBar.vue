<template>
  <div class="sort-option-items">
    <ul>
      <div class="sort-option-guide">
        <span>:مرتب سازی بر اساس</span>
        <i class="material-icons">menu</i>
      </div>
      <li :class="{ active: sortOption == option.code }" v-for="option in sortOptions" :key="option.code" @click="sortActive(option.code)">
        <span>
          {{ option.text }}
        </span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-pack: right;
  -ms-flex-pack: right;
  justify-content: right;
  -ms-flex-line-pack: center;
  align-content: center;
  background: #fff;
  padding: 8px;
  border: $border;
  border-color: $box-border-color;
  -webkit-box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  .sort-option-guide {
    span {
      font-weight: 450;
      text-decoration: none;
      padding: 0 5px;
      position: relative;
      font-size: 0.86rem;
      line-height: 30px;
      vertical-align: middle;
      border-radius: 8px;
      white-space: nowrap;
    }

    i {
      @extend span;
      font-size: 18px;
      margin-left: 0px;
      padding: 0 2px;
      color: #424750;
    }
  }
  li {
    list-style: none;
    margin-right: 5px;
    display: inline-block;
    cursor: pointer;
    outline: none;
    margin: 0 3px;
    border-radius: 8px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &.active,
    &.active:hover {
      color: #fff;
      background: $secondary;

      span {
        color: #fff;
      }
    }
    &:hover {
      background-color: $base-color;
    }

    span {
      font-weight: 400;
      color: #4a5f73;
      text-decoration: none;
      padding: 0 5px;
      position: relative;
      font-size: 0.857rem;
      line-height: 30px;
      vertical-align: middle;
      border-radius: 8px;
      white-space: nowrap;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      sortOption: 4,
      sortOptions: [
        //4: the most views ,22: the most relevant,27: customers recommendation
        {
          text: 'پر بازدیدترین',
          code: 4,
        },
        {
          text: 'مرتبط ترین',
          code: 22,
        },
        {
          text: 'پرفروش ترین',
          code: 27,
        },
      ],
    };
  },
  methods: {
    sortActive(code) {
      console.log(code);
      this.sortOption = code;
      this.$emit('sortOption', code);
    },
  },
};
</script>
