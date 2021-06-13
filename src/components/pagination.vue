<template>
  <div>
    <span v-if="!pagesArray.includes(1)" @click="newPage(1)">1</span>
    <span v-if="!pagesArray.includes(1)"> ... </span>
    <span v-for="page in pagesArray" :key="page" @click="newPage(page)">{{ page }}</span>
    <span v-if="!pagesArray.includes(totalPages)"> ... </span>
    <span v-if="!pagesArray.includes(totalPages)" @click="newPage(totalPages)">{{ totalPages }}</span>
  </div>
</template>

<script>
export default {
    props:[
        "totalPages"
    ],
  data() {
    return {
      currentPage: 1,
      pagesArray: [1, 2, 3],
    };
  },
  methods: {
    newPage(newPage) {
      this.currentPage = newPage;
      this.$emit("getPage",this.currentPage);
      let index = this.pagesArray.indexOf(newPage);
      if (index == 0) {
        this.pagesArray.pop();
        if (newPage > 1) {
          this.pagesArray.unshift(newPage - 1);
        }
      } else if (index == 2 && newPage != this.totalPages) {
        this.pagesArray.shift();
        if (newPage < this.totalPages) {
          this.pagesArray.push(newPage + 1);
        }
      }
      if(newPage==1){
          this.pagesArray=[]
          for(let i=1;i<=3 && i<=this.totalPages;i++){
              this.pagesArray.push(i);
          }
      }else if(newPage == this.totalPages){
          this.pagesArray=[]
          for(let i=0;i< 3 && i<this.totalPages - 1;i++){
              this.pagesArray.unshift(this.totalPages - i);
          }
      }
      console.log(this.pagesArray);
    },
  },
};
</script>
