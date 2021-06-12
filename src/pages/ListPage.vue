<template>
    <div>
        <p>this is the list page</p>
        <toggler @toggle="hasSellingStock=$event"></toggler>
        <SortBar @sortOption="sortCode=$event"/>
        <p>{{sortCode}},,{{hasSellingStock}}</p>
    </div>
</template>

<script>
import Toggler from "@/components/toggler.vue";
import SortBar from "../components/SortBar.vue";
export default {
    data(){
        return{
            sortCode:0,
            hasSellingStock:false,
        }
    },
    components:{
        toggler:Toggler,
        SortBar,
        
    }
}
</script>