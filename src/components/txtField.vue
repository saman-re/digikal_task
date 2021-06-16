<template>
  <div class="right-inner-addon input-container">
    <i class="material-icons search-icon">search</i>
    <input class="search-input" type="text" placeholder="جستجو کنید" @keydown.enter="search" v-model="searchKey" />
  </div>
</template>

<script>
import { searchWatcher } from '../main';

export default {
  created(){
    if(this.$route.query.search){
      this.searchKey=this.$route.query.search;
    }
  },
  data() {
    return {
      searchKey: '',
    };
  },
  methods: {
    search() {
      if (this.searchKey != '') {
        if (this.$route.query.search !== this.searchKey) {
          this.$router.push({
            name: 'home_page',
            query: {
              search: this.searchKey,
              page:this.$route.query.page,
            },
          });
        }else{
          searchWatcher.$emit('re-search', "");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

.input-container {
  position: relative;

  .search-input {
    width: 100%;
    padding: 1.2em;
    padding-right: 2.8em;
    padding-left: 20vw;
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
