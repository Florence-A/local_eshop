
<template>

    <HeaderShop></HeaderShop>
    <NavbarShop></NavbarShop>
    <router-view></router-view>
    <FooterShop></FooterShop>
   
</template>
  
<script>
    import HeaderShop from "../components/HeaderShop.vue";
    import NavbarShop from "../components/NavbarShop.vue";
    import FooterShop from "@/components/FooterShop.vue";
  
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
  
</style>
  
  