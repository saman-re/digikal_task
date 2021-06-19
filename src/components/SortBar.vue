<template>
  <div class="sort-option-items">
    <div class="filter" @click="dialogActivate('range')">
      <i class="material-icons">tune</i>
      <span>جستجوی پیشرفته:</span>
    </div>
    <div class="filter" @click="dialogActivate('select')">
      <i class="material-icons">sort</i>
      <span>مرتب سازی بر اساس:</span>
    </div>
    <div class="sort-option-guide">
      <i class="material-icons">sort</i>
      <span>مرتب سازی بر اساس:</span>
    </div>
    <ul>
      <li :class="{ active: sortOption == option.code }" v-for="option in sortOptions" :key="option.code" @click="sortActive(option.code)">
        <span>
          {{ option.text }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { searchWatcher } from '../main';
export default {
  created(){
    // searchWatcher.$emit("getSortCode")
    // searchWatcher.$on("getDefault",(code)=>{
    //   this.sortOption = code;
    // })
  },
  data() {
    return {
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
  computed:{
    sortOption:{
      get(){
        return this.$store.getters.getParams.sort;
      },
      set(code){
        this.$store.commit('setSortCode',code);
      }
    }
  },
  methods: {
    sortActive(code) {
      this.sortOption = code;
      // searchWatcher.$emit('sortOption', code);
    },
    dialogActivate(slotName){
      searchWatcher.$emit('setSlot',slotName)
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/_variables.scss';
.sort-option-items {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -ms-flex-line-pack: center;
  align-content: center;
  padding: 8px;
  background: #fff;
  border: $border;
  border-color: $box-border-color;
}
.sort {
  span {
    position: relative;
    font-weight: 450;
    line-height: 30px;
    vertical-align: middle;
    border-radius: 8px;
    white-space: nowrap;
  }
  i {
    @extend span;
    font-size: 24px;
    margin-left: 0px;
    padding: 0 2px;
    color: #848992e3;
  }
}
.sort-option-guide {
  @extend .sort;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-left: 3px;
  @media (max-width: 1050px) {
    display: none;
  }
  span {
    padding: 0 5px;
    font-size: 0.95rem;
  }
}
.filter {
  @extend .sort;
  display: none;
  background-color: $base-color;
  padding: 0 10px;
  margin: 0px 20px 0px -5px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: rgba($color: #000000, $alpha: 0.8);
  }
  span {
    font-size: 0.8rem;
    padding: 0;
  }
  i {
    font-size: 22px;
  }
  // @media (max-width: 768px) {
  @media (max-width: 1050px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
}

ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -ms-flex-line-pack: center;
  align-content: center;
  margin: 0;
  padding: 0;
  background: #fff;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1050px) {
    visibility: hidden;
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
    -webkit-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;

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
