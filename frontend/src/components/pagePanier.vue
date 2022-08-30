<template>
    <div class="panier">
        <headerShop></HeaderShop>
        <navbarShop></navbarShop>
        <listeAchats></listeAchats>
        <commandesLivrees></commandesLivrees>
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
import listeAchats from '../components/listeAchats.vue'
import commandesLivrees from '../components/commandesLivrees.vue'
import produitsFavoris from '../components/produitsFavoris.vue'
import footerShop from '../components/footerShop.vue'

export default {
    name: 'panier',
    components:{
        headerShop,
        navbarShop,
        listeAchats,
        commandesLivrees,
        produitsFavoris,
        footerShop
    },
}
</script>
<style>
    
</style>