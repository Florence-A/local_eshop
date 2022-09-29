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
import AjouterProduit from "../cms/AjouterProduit.vue";
import ModifProduit from "../ModifProduit.vue";
import AfficherProduit from "../cms/AfficherProduit.vue";

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
      padding-right: 5px;
      padding-left: 5px;
      margin-top: 5px ;
      margin-bottom: 5px ;
      align-items: center;
      border: none;
      border-radius: 8px;
      border-color : #8d874e #8d874e #57522c #57522c;
      border-style: solid;
      border-width: 3px;
      box-shadow: 2px 2px 2px #3d3a1e;
    }
    .row{
        padding: 0;
        margin: 0;
        --bs-gutter-x : 0;
        --bs-gutter-Y : 0;
        background-color:  #d6d2ab; 
    }
    h1, h2{
        text-align: center;
        margin-top: 5px;
        margin-bottom: 0px;
        background-color: #4e4a20;
        color: white;
        border-radius: 0px 0px 8px 8px;
        border-color : #6b662e #6b662e #3b3817  #3b3817;
        border-style: solid;
        border-width: 3px;
        box-shadow: 0px 3px 0px #312f13;}
    h3, h4, h5 {
      text-align: center;
      background-color: #706b3b;
      color: white;
      padding-bottom: 5px;
      width: 100%;
      color: white;
      border-radius: 8px;
      border-color : #8f884e #8f884e #4e4b2a  #4e4b2a;
      border-style: solid;
      border-width: 3px;
      box-shadow: 0px 3px 0px #3b3920;
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
      text-align: center;
      padding-bottom: 5px;
      padding-top: 5px ;
      color: #3b3920;
    }
  }
  
        
  </style>
