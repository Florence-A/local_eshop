<template>
    <div class="row">    
        <h2> Produits favoris</h2>
        <div v-for="data in dataFavo" :key="data.id">
            <h3 class="name">{{data.name}}</h3>
            <p class="prix">{{data.description}} </p>
            <p class="prix">{{data.HT_price}} €</p>
            <div class="quantity-toggle">
                <button @click="decrement()">&mdash;</button>
                <input type="text" :value="quantity" readonly>
                <button @click="increment()">&#xff0b;</button>
            </div>
            <button v-on:click="achat();" class="butAchat">Acheter</button>
        </div>
    </div>
</template>

<script>
// import { computed } from '@vue/reactivity'
import axios from 'axios'

export default {
    name : "FavoriteItems",
    components: {
    },
    data(){
        return {
            quantity: 1,
            dataFavo : []
        }
    },
    methods: {
        increment () {
            this.quantity++
        },
        decrement () {
            if(this.quantity === 1) {
                alert('Quantité négative non autorisée')
            } else {
                this.quantity--
            }
        },
        achat(){
            // fonction Achat A COMPLETER
            // click => ajouter produit à liste produit du client
            // en fonction de qtity
        }
    },
    mounted(){
        axios.get('http://localhost:9000/products/')
        .then((response)=>{
            console.log(response.data)
            this.dataFavo = response.data
            
        })
    }
}
</script>

<style lang="scss">
</style>