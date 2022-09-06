<template>
    <div class="compte">
        <headerShop></headerShop>
        <navbarShop></navbarShop>
        <infoCompte></infoCompte>
        <modifCompte></modifCompte>
        <commandesEnCours></commandesEnCours>
        <commandesLivrees></commandesLivrees>
        <footershop></footershop>
    </div>

<script>
// IMPORTS
import bdd from '../bdd'
import { onMounted, ref, watch } from 'vue' //destructuration

// COMPONENTS
import headerShop from '../components/headerShop.vue'
import navbarShop from '../components/navbarShop.vue'
import infoCompte from '../components/infoCompte.vue'
import modifCompte from '../components/modifCompte.vue'
import commandesEnCours from '../components/commandesEnCours.vue'
import commandesLivrees from '../components/commandesLivrees.vue'
import footerShop from '../components/footerShop.vue'

export default {
    name: 'compte',
    components:{
        headerShop,
        navbarShop,
        infoCompte,
        modifCompte,
        commandesEnCours,
        commandesLivrees,
        footerShop
    },
}
</script>
<style>
    
</style>