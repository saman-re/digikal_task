<template>
  <div class="right-inner-addon input-container">
    <i class="material-icons search-icon">search</i>
    <input class="search-input" type="text" placeholder="جستجو کنید" @keydown.enter="search" v-model="searchKey" />
    <i class="material-icons clear-icon" v-show="searchKey" @click="searchKey = ''">add_circle</i>
  </div>
</template>

<script>
export default {
  computed: {
    searchKey: {
      get() {
        return this.$store.state.query;
      },
      set(key) {
        this.$store.commit('setSearchQuery', key);
      },
    },
  },
  methods: {
    search() {
      if (this.searchKey != '') {
        console.log(this.$route);
        if (this.$route.name != 'home_page') {
          this.$router.push({
            name: 'home_page',
          });
        }
        this.$store.commit('changePage',1);
        this.$store.dispatch('getProduct');
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
  .bar-icon {
    position: absolute;
    padding: 12px 12px;
    color: darken($box-border-color, 40%);
  }

  .search-icon {
    @extend .bar-icon;
    position: absolute;
    right: 0px;
    padding: 12px 12px;
    pointer-events: none;
  }
  .clear-icon {
    @extend .bar-icon;
    left: 0;
    cursor: pointer;
    transform: rotate(45deg);
  }
}
</style>
