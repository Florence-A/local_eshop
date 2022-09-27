<template>
    <div class="CartPage">
        <Cart_ShoppingList></Cart_ShoppingList>
        <Cart_DeliveredOrders></Cart_DeliveredOrders>
        <Cart_FavoriteItems></Cart_FavoriteItems>
    </div>
</template>

<script>
// IMPORTS
// import bdd from '../bdd'
// import { onMounted, ref, watch } from 'vue' //destructuration

// COMPONENTS
import Cart_ShoppingList from './Cart_ShoppingList.vue'
import Cart_DeliveredOrders from './Cart_DeliveredOrders.vue'
import Cart_FavoriteItems from './Cart_FavoriteItems.vue'

export default {
    name: 'CartPage',
    components:{
        Cart_ShoppingList,
        Cart_DeliveredOrders,
        Cart_FavoriteItems,
    },
}
</script>
<style>
</style>