<template>
    <div class="product-container">
        <product-card v-if="product" :product="product" />
    </div>
</template>
<style lang="scss" scoped>
    .product-container{
        display: flex;
        justify-content: center;
        // align-items: center;
        transform: translateY(+20%);
        cursor: default;
    }
</style>
<script>
import productCard from "../components/ProductCard.vue";
import {PDP} from "../api/apis.js";
export default {
    created(){
        this.fetch();
    },
    mounted(){
        this.fetch();
    },
    data(){
        return{
            product:null,
        }
    },
    methods:{
        async fetch(){
            let ID=this.$route.query.ID;
            let data= await PDP(ID);
            this.product=data.data.data.product;
        }
    },
    components:{
        productCard
    }
}
</script>