<template>
    <div class="produits">
        <headerShop></headerShop>
        <navbarShop></navbarShop>
        <articlesRow></articlesRow>
        <produitsFavoris></produitsFavoris>
        <footerShop></footerShop>
    </div>

<script>
// IMPORTS
import bdd from '../bdd'
import { onMounted, ref, watch } from 'vue' //destructuration

// COMPONENTS
import headerShop from '../components/headerShop.vue'
import navbarShop from '../components/navbarShop.vue'
import articlesRow from '../components/articlesRow.vue'
import produitsFavoris from '../components/produitsFavoris.vue'
import footerShop from '../components/footerShop.vue'

export default {
    name: 'produits',
    components:{
        headerShop,
        navbarShop,
        articlesRow,
        produitsFavoris,
        footerShop
    },
}
</script>
<style>
    
</style>