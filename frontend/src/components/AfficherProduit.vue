<template>
  <div class="row" id="AfficheProduit">
    <div class="row">
      <h2>Afficher un produit</h2>
    </div>
    <div class="row" id="infosProd">
      <div class="row" id="infosUnitProd">
        <div><h4>Produit 1</h4></div>
        <div class="col-12">
          <div><p>Nom du Produit 1</p></div>
          <div><p>Description du Produit 1</p></div>
          <div><p>Categorie(s) du Produit 1</p></div>
          <div><p>Sous-categorie(s) du Produit 1</p></div>
          <div><p>Autres categorie(s) du Produit 1</p></div>
          <div><p>Prix du Produit 1</p></div>
        </div>
        <div><button>Modifier</button></div>
      </div>
      <div class="row" id="infosUnitProd">
        <div><h4>Produit 2</h4></div>
        <div class="col-12">
          <div><p>Nom du Produit 2</p></div>
          <div><p>Description du Produit 2</p></div>
          <div><p>Categorie(s) du Produit 2</p></div>
          <div><p>Sous-categorie(s) du Produit 2</p></div>
          <div><p>Autres categorie(s) du Produit 2</p></div>
          <div><p>Prix du Produit 2</p></div>
        </div>
        <div><button>Modifier</button></div>
      </div>
      <div class="row" id="infosUnitProd">
        <div><h4>Produit 3</h4></div>
        <div class="col-12">
          <p>Nom du Produit 3</p>
          <p>Description du Produit 3</p>
          <p>Categorie(s) du Produit 3</p>
          <p>Sous-categorie(s) du Produit 3</p>
          <p>Autres categorie(s) du Produit 3</p>
          <p>Prix du Produit 1</p>
        </div>
        <div><button>Modifier</button></div>
      </div>
    </div>
  </div>

</template>
<script>
// import { computed } from '@vue/reactivity'
export default {
  id: "AfficheProduit",
};
</script>

<!-- <style lang="scss">
#AfficheProduit {
  * {
    margin: 0;
    padding: 0;
  }
  button{
    background-color: #706b3b;
    border-radius: 5px;
    color: white;
  }
  div{
    text-align: center;
    align-content: center;
    padding: 2px;
  }
  h3 {
    text-align: center;
    background-color: #706b3b;
    color: white;
    padding-bottom: 5px;
  }
  h4{
    background-color: #9b9454;
  }
  #infosProd {
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
}
</style> -->
