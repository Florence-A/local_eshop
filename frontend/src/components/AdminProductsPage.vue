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
<style lang="scss">
  .AdminProductsPage{
    * {
              margin: 0;
              padding: 0;
          }
    button{
      background-color: #706b3b;
      border-radius: 5px;
      color: white;
      margin-bottom: 2px;
    }
    h3 h4 {
      text-align: center;
      background-color: #706b3b;
      color: white;
      padding-bottom: 5px;
    }
    div{
    text-align: center;
    align-content: center;
    padding: 5px;
    background-color: #d6d2ab;
    margin-top: 5px;
    margin-bottom: 5px;
    }
    
    #infos #infosProd {
      background-color: #d6d2ab;
      padding: 5px;
      #infosUnitProd {
        .col-12 {
          margin-top: 5px;
          margin-bottom: 5px;
          color: #a0995c;
        }
      }
    }
          
    .col-6 {
      margin-top: 5px;
      margin-bottom: 5px;
      color: #a0995c;
      flex-direction: column;
      align-content: center;
      float: left;
      display: inline
    }  
    p {
      margin: 0;
      padding: 0;
      padding-left: 5px;
    }
  }
  
        
  </style>
