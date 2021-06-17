<template>
  <div class="radio-container">
    <div class="radio-title">
      <i class="material-icons">sort</i>
      <span>مرتب سازی بر اساس</span>
    </div>
    <label class="radio-label" style="direction:rtl" v-for="option in sortOptions" :key="option.code">
      <input type="radio" class="radio" checked="checked" :value="option.code" v-model="sortOption" @input="sortActive(option.code)" />
      <span>{{ option.text }}</span>
    </label>
  </div>
</template>

<script>
import { searchWatcher } from '../main';
export default {
  created(){
    searchWatcher.$emit("getSortCode")
    searchWatcher.$on("getDefault",(code)=>{
      this.sortOption = code;
    })
  },
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
      this.sortOption = code;
      searchWatcher.$emit('sortOption', code);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

.radio-container {
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  background-color: #fff;
  border-radius: 20px;
  color: lighten($color: #000000, $amount: 30);
  padding: 25px 32px;
  margin-bottom: 110px;

  .radio-title{
    display: flex;
    align-items: center;
    text-align: center;
    padding-bottom: 20px;
    border-bottom: $border;
    span{
      font-size: 20px;
      font-weight: 600;
    }
  }
  label {
    font-size: 17px;
    font-weight: 550;
    line-height: 1.65;
    border-top: $border;
    border-color: $box-border-color;
  }
}

.radio-label {
  padding: 10px 10px;
  padding-bottom: 20px;
  padding-left:100px;
  cursor: pointer;
  input {
    display: none;
    &.radio + span:after {
      border: $primary 2px solid;
    }
    & + span {
      line-height: 22px;
      height: 22px;
      padding-left: 22px;
      position: relative;
      &:not(:empty) {
        padding-left: 22px + 8;
        margin-left: 20px;
      }
      &:before,
      &:after {
        content: '';
        width: 22px;
        height: 22px;
        display: block;
        border-radius: 50%;
        left: 0;
        top: 0;
        position: absolute;
      }
      &:after {
        background: #fff;
        transform: scale(0.78);
        transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4);
      }
    }
    &:checked + span {
      &:before {
        transform: scale(1.04);
      }
      &:after {
        transform: scale(0.4);
        transition: transform 0.3s ease;
      }
    }
    &.radio:checked + span {
      &:before {
        background: #fff;
        border: 2px solid $primary;
      }
      &:after {
        background: $primary;
      }
    }
  }
  &:hover {
    input {
      & + span {
        &:before {
          transform: scale(0.92);
        }
        &:after {
          transform: scale(0.74);
        }
      }
      &:checked + span {
        &:after {
          transform: scale(0.4);
        }
      }
    }
  }
}
</style>
