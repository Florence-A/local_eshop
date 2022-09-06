<template>
    <div class="CartPage">
        <HeaderShop></HeaderShop>
        <NavbarShop></NavbarShop>
        <ShoppingList></ShoppingList>
        <DeliveredOrders></DeliveredOrders>
        <FavoriteProducts></FavoriteProducts>
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
import ShoppingList from './ShoppingList.vue'
import DeliveredOrders from './DeliveredOrders.vue'
import FavoriteProducts from './FavoriteItems.vue'
import FooterShop from './FooterShop.vue'

export default {
    name: 'CartPage',
    components:{
        HeaderShop,
        NavbarShop,
        ShoppingList,
        DeliveredOrders,
        FavoriteProducts,
        FooterShop
    },
}
</script>
<style>
    
</style>