<template>
    <div>
        <p>this is the list page</p>
        <toggler @toggle="hasSellingStock=$event"></toggler>
        <SortBar @sortOption="sortCode=$event"/>
        <pagination @getPage="currentPage=$event" :totalPages="totalPage"></pagination>
        <p>{{sortCode}},,{{hasSellingStock}},,{{currentPage}}</p>
    </div>
</template>

<script>
import Toggler from "@/components/toggler.vue";
import SortBar from "../components/SortBar.vue";
import Pagination from "../components/pagination.vue"
export default {
    async fetch(){

    },
    data(){
        return{
            sortCode:0,
            hasSellingStock:false,
            currentPage:1,
            totalPage:10,
        }
    },
    components:{
        toggler:Toggler,
        SortBar,
        Pagination,
    }
}
</script>