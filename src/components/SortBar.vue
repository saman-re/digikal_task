<template>
  <div class="">
      <p v-for="option in sortOptions" :key="option.code" @click="sortActive(option.code)">
          {{option.text}}
      </p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            sortOptions:[
                //4: the most views ,22: the most relevant,27: customers recommendation
                {
                    text:"پر بازدیدترین",
                    code:4,
                },
                {
                    text:"مرتبط ترین",
                    code:22,
                },
                {
                    text:"پرفروش ترین",
                    code:27,
                },
            ]
        }
    },
    methods:{
        sortActive(code){
            console.log(code);
            this.$emit("sortOption",code);
        }
    }
};
</script>

<style lang="scss"></style>
