<template>
        <div class="HomePage">
            <Ho_CarouselShop></Ho_CarouselShop>
            <Ho_AssoInfos></Ho_AssoInfos>
            <Ho_ShopInfos></Ho_ShopInfos>
            <Ho_PracticalInfos></Ho_PracticalInfos>
        </div>
    
</template>
<script>
// IMPORTS


// COMPONENTS
import Ho_CarouselShop from './Ho_CarouselShop.vue'
import Ho_ShopInfos from './Ho_ShopInfos.vue'
import Ho_PracticalInfos from './Ho_PracticalInfos.vue'
import Ho_AssoInfos from './Ho_AssoInfos.vue'

export default {
    name: 'HomePage',
    components:{
        Ho_CarouselShop,
        Ho_ShopInfos,
        Ho_PracticalInfos,
        Ho_AssoInfos,
    },
}
</script>

<style>
</style>