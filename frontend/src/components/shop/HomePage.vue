<template>
        <div class="HomePage">
            <CarouselShop></CarouselShop>
            <AssoInfos></AssoInfos>
            <ShopInfos></ShopInfos>
            <PracticalInfos></PracticalInfos>
        </div>
    
</template>
<script>
// IMPORTS


// COMPONENTS
import CarouselShop from './CarouselShop.vue'
import ShopInfos from './ShopInfos.vue'
import PracticalInfos from './PracticalInfos.vue'
import AssoInfos from './AssoInfos.vue'

export default {
    name: 'HomePage',
    components:{
        CarouselShop,
        ShopInfos,
        PracticalInfos,
        AssoInfos,
    },
}
</script>

<style>
</style>