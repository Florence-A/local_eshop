<template>
    <div class="row">    
        <h4> Commandes livrées</h4>
        <div v-for="data in delivOrders" :key="data.id">
            <h2 class="name">{{delivOrders.name}}</h2>
            <p class="prix">{{delivOrders.description}} </p>
            <p class="prix">{{delivOrders.HT_price}} €</p>
            <button v-on:click="consulter();" class="butAchat">Consulter</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    components: { },
    data(){
        return {
            delivOrders : []
        }
    },
    mounted(){
        axios.get('http://localhost:9000/products')
        .then((response)=>{
            console.log(response.data)
            this.delivOrders  = response.data
            
        })
    }
}
</script>

<style lang="scss">
</style>