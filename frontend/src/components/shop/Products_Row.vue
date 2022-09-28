<template>
    <div class="row">
        <h2 class="title">Nos articles</h2>
        <div v-for="data in dataItem" :key="data.id">
            <h3 class="name">{{data.name}}</h3>
            <p class="prix">{{data.HT_price}} €</p>
            <div class="image" v-for="(image, index) in data.Images" :key="index">
                <img :src="image.path" alt="">
            </div>
            <div class="quantity-toggle">
                <button @click="decrement()">&mdash;</button>
                <input class="input_qte" type="text" :value="quantity" readonly>
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
        axios.get('http://localhost:9000/products/', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response)=>{
            response.data.forEach(product => {
                product.Images.forEach(image=>{
                    image.path = `http://localhost:9000/images/products/${image.path}`
                })
            });
            this.dataItem = response.data            
        })
    }
}
</script>

<style lang="scss">
</style>