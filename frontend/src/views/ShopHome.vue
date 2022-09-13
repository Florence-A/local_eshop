
<template>
    <div id="ShopHome">
        <HeaderShop></HeaderShop>
        <NavbarShop></NavbarShop>
        <router-view></router-view>
        <FooterShop></FooterShop>
    </div>
   
</template>
  
<script>
    import HeaderShop from "../components/shop/HeaderShop.vue";
    import NavbarShop from "../components/shop/NavbarShop.vue";
    import FooterShop from "@/components/shop/FooterShop.vue";
  
    export default {
        name: 'ShopHome',
        components: {
            HeaderShop,
            NavbarShop,
            FooterShop
        }
  }
</script>
  
<style>
    #ShopHome{
        height          : 100vh;
        display         : flex;
        flex-direction  : column;
    }
    #FooterShop{
        /* position    : absolute;
        bottom      : 0px;
        left        : 0px;
        right       : 0px; */
    }
</style>
  
  