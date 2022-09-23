<template>
    <div class="ProductsPage">
        <Products_Row></Products_Row>
        <Cart_FavoriteItems></Cart_FavoriteItems>
    </div>
</template>

<script>
// IMPORTS
// import bdd from '../bdd'
// import { onMounted, ref, watch } from 'vue' //destructuration

// COMPONENTS
import Products_Row from './Products_Row.vue'
import Cart_FavoriteItems from './Cart_FavoriteItems.vue'

export default {
    name: 'ProductsPage',
    components:{
        Products_Row,
        Cart_FavoriteItems,
    },
}
</script>
<style>
    
</style>