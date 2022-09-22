<template>
  <div class="AdminProductsPage">
    <AjouterProduit></AjouterProduit>
    <ModifProduit></ModifProduit>
    <AfficherProduit></AfficherProduit>
  </div>
</template>

<script>
// IMPORTS
// import bdd from '../bdd'
// import { onMounted, ref, watch } from 'vue' //destructuration

// COMPONENTS
import AjouterProduit from "./AjouterProduit.vue";
import ModifProduit from "./ModifProduit.vue";
import AfficherProduit from "./AfficherProduit.vue";

export default {
  name: "AdminProductsPage",
  components: {
    AjouterProduit,
    ModifProduit,
    AfficherProduit,
  },
};
</script>
<style></style>
