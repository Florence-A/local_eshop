<template>
    <div class="CartPage">
        <ShoppingList></ShoppingList>
        <DeliveredOrders></DeliveredOrders>
        <FavoriteProducts></FavoriteProducts>
    </div>
</template>

<script>
// IMPORTS
// import bdd from '../bdd'
// import { onMounted, ref, watch } from 'vue' //destructuration

// COMPONENTS
import ShoppingList from './ShoppingList.vue'
import DeliveredOrders from './DeliveredOrders.vue'
import FavoriteProducts from './FavoriteItems.vue'

export default {
    name: 'CartPage',
    components:{
        ShoppingList,
        DeliveredOrders,
        FavoriteProducts,
    },
}
</script>
<style>
    
</style>