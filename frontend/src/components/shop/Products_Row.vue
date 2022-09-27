<template>
    <div class="row">
        <h2 class="title">Nos articles</h2>
        <div v-for="data in dataItem" :key="data.id">
            <h3 class="name">{{data.name}}</h3>
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
// import ItemCard from './ItemCard.vue';
import axios from 'axios'

export default {
    name: "ItemsRow",
    components:{
        // ItemCard, // initialisation
    },


    data(){
        return {
            quantity: 1,
            dataItem : []
            // dataItem: [
            //     { invId: 1, _ref: 'An Item', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec dolor vel ante suscipit porta laoreet in metus. In aliquam.", image: '//placehold.it/200', HT_price: 999 },
            //     { invId: 2, _ref: 'Thing', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec dolor vel ante suscipit porta laoreet in metus. In aliquam.", image: '//placehold.it/200', HT_price: 1499 },
            //     { invId: 3, _ref: 'Doo-dad', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec dolor vel ante suscipit porta laoreet in metus. In aliquam.", image: '//placehold.it/200', HT_price: 499 },
            //     { invId: 4, _ref: 'Other thing', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec dolor vel ante suscipit porta laoreet in metus. In aliquam.", image: '//placehold.it/200', HT_price: 299 },
            // ]
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
            this.dataItem = response.data
            
        })
    }
}
</script>

<style lang="scss">
</style>