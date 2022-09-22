<template>
    <div class="ProductsPage">
        <HeaderShop></HeaderShop>
        <NavbarShop></NavbarShop>
        <ItemsRow></ItemsRow>
        <FavoriteItems></FavoriteItems>
        <FooterShop></FooterShop>
    </div>
</template>

<script>
// IMPORTS
// import bdd from '../bdd'
// import { onMounted, ref, watch } from 'vue' //destructuration

// COMPONENTS
import HeaderShop from './HeaderShop.vue'
import NavbarShop from './NavbarShop.vue'
import ItemsRow from './ItemsRow.vue'
import FavoriteItems from './FavoriteItems.vue'
import FooterShop from './FooterShop.vue'

export default {
    name: 'ProductsPage',
    components:{
        HeaderShop,
        NavbarShop,
        ItemsRow,
        FavoriteItems,
        FooterShop
    },
}
</script>
<style>
    
</style>