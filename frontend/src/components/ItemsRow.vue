<template>
    <div class="ItemsRow">
        <h2 class="title">
            Nos articles
            <!-- {{ toto }}  je peux appeler mon props déclaré ds home -->
        </h2>
        <div class="wrapper--card">
            <div v-for="data in dataItem" :key="data.id">
                <h2>{{data._ref}}</h2>
                <div>
                    {{data.image}}
                </div>
                <div>
                    <p>{{data.description}}</p>
                    <p>{{data.HT_price}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import ItemCard from './ItemCard.vue';
import axios from 'axios'

export default {
    name: "ItemsRow",
    components:{
        // ItemCard, // initialisation
    },


    data(){
        return {
            dataItem: {}
        }
    },

    mounted(){
        axios.get('http://localhost:9000/products/')
        .then((response)=>{
            console.log(response.data)
            this.dataItem = response.data
            
        })
    }
}
</script>

<style lang="scss">
.ItemsRow{
    .title{
        font-size: 2.5rem ;
    } 
}

</style>