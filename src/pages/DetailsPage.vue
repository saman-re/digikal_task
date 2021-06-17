<template>
    <div>
        <product-card :product="product" />
    </div>
</template>

<script>
import productCard from "../components/ProductCard.vue";
import Axios from "../api/axios_config";
export default {
    created(){
        this.fetch();
    },
    data(){
        return{
            product:{},
        }
    },
    methods:{
        async fetch(){
            let ID=this.$route.query.ID;
            let data= await Axios.get(`product/{${ID}}/`)
            this.product=data.data.product;
        }
    },
    components:{
        productCard
    }
}
</script>