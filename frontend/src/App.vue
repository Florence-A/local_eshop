
<template>
  <HeaderShop></HeaderShop>
  <NavbarShop></NavbarShop>
  <router-view></router-view>
  <FooterShop></FooterShop>
  
  <!-- <HomePage></HomePage> -->
  <!-- <ProductsPage></ProductsPage> -->
  <!-- <CartPage></CartPage> -->
  <!-- <CustomerAccountPage></CustomerAccountPage> -->
</template>

<script>
// import HomePage from './components/HomePage.vue'
// import ProductsPage from './components/ProductsPage.vue';
import HeaderShop from './components/HeaderShop.vue';
import FooterShop from './components/FooterShop.vue';
import NavbarShop from './components/NavbarShop.vue';
// import CartPage from './components/CartPage.vue';
// import CustomerAccountPage from './components/CustomerAccountPage.vue'

export default {
  name: 'App',
  components: {
    // HomePage,
    // ProductsPage,
    HeaderShop,
    FooterShop,
    NavbarShop
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

