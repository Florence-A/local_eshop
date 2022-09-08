<template>
    <div class="HomePage">
        <HeaderShop></HeaderShop> 
        <NavbarShop></NavbarShop>
        <CarouselShop></CarouselShop>
        <AssoInfos></AssoInfos>
        <ShopInfos></ShopInfos>
        <PracticalInfos></PracticalInfos>
        <FooterShop></FooterShop>
    </div>
</template>
<script>
// IMPORTS


// COMPONENTS
import HeaderShop from './HeaderShop.vue'
import NavbarShop from './NavbarShop.vue'
import CarouselShop from './CarouselShop.vue'
import ShopInfos from './ShopInfos.vue'
import PracticalInfos from './PracticalInfos.vue'
import AssoInfos from './AssoInfos.vue'
import FooterShop from './FooterShop.vue'


export default {
    name: 'HomePage',
    components:{
        HeaderShop,
        NavbarShop,
        CarouselShop,
        ShopInfos,
        PracticalInfos,
        AssoInfos,
        FooterShop
    },
}
</script>

<style>
</style>