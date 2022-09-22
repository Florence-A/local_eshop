<template>
    <div class="CartPage">
        <ItemsRow></ItemsRow>
        <!-- <ItemCard></ItemCard> -->
        <!-- <ShoppingList></ShoppingList>
        <DeliveredOrders></DeliveredOrders>
        <FavoriteProducts></FavoriteProducts> -->
    </div>
</template>

<script>
// IMPORTS
// import bdd from '../bdd'
//import { onMounted, ref, watch } from 'vue' //destructuration

// COMPONENTS
// import ShoppingList from './ShoppingList.vue'
// import DeliveredOrders from './DeliveredOrders.vue'
// import FavoriteProducts from './FavoriteItems.vue'
import ItemsRow from './ItemsRow.vue'
// import ItemCard from './ItemCard.vue';

export default {
    name: 'CartPage',
    components:{
    // ShoppingList,
    // DeliveredOrders,
    // FavoriteProducts,
    ItemsRow,
    // ItemCard
},
}
</script>
<style>
    
</style>