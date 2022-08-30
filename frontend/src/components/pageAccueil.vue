<template>
    <div class="accueil">
        <headerShop></headerShop> 
        <navbarShop></navbarShop>
        <carouselShop></carouselShop>
        <infoAsso></infoAsso>
        <infoBoutique></infoBoutique>
        <infoPratique></infoPratique>
        <footerShop></footerShop>
    </div>
</template>
<script>
// IMPORTS


// COMPONENTS
import headerShop from './headerShop.vue'
import navbarShop from './navbarShop.vue'
import carouselShop from './carouselShop.vue'
import infoBoutique from './infoBoutique.vue'
import infoPratique from './infoPratique.vue'
import infoAsso from './infoAsso.vue'
import footerShop from './footerShop.vue'


export default {
    name: 'pageAccueil',
    components:{
        headerShop,
        navbarShop,
        carouselShop,
        infoBoutique,
        infoPratique,
        infoAsso,
        footerShop
    },
}
</script>
<style>
    
</style>