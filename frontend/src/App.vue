
<template>
  <LoginPage></LoginPage>
  <!-- <HomePage></HomePage> -->
  <!-- <ProductsPage></ProductsPage> -->
  <!-- <CartPage></CartPage> -->
  <!-- <CustomerAccountPage></CustomerAccountPage> -->
</template>

<script>
import LoginPage from './components/LoginPage.vue'
// import HomePage from './components/HomePage.vue'
// import ProductsPage from './components/ProductsPage.vue';
// import CartPage from './components/CartPage.vue';
// import CustomerAccountPage from './components/CustomerAccountPage.vue'

export default {
  name: 'App',
  components: {
    LoginPage,
    // HomePage,
    // ProductsPage,
    // CartPage,
    // CustomerAccountPage
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

