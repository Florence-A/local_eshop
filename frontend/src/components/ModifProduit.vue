<template>
  <div class="row" id="ModifProduit">
    <div class="row">
      <h3>Modifier un produit</h3>
    </div>
    <div class="row" id="infos">
      <div>
        <h2>Choisir le produit à modifier</h2>
        <select name="choixProd" id="choixProd">
          <option value="">--Choisissez un produit--</option>
          <option value="prod1">Prod 1</option>
          <option value="prod2">Prod 2</option>
          <option value="prod3">Prod 3</option>
          <option value="prod4">Prod 4</option>
        </select>
      </div>
      <div class="infosProd">
        <h2>Affichage des infos produits</h2>
        <div class="col-6">
          <div><p>Nom</p></div>
          <div><input placeholder="Nom du produit" /></div>
        </div>
        <div class="col-6">
          <p>Description</p>
          <textarea id="descriptionProd" name="descriptionProd"></textarea>
        </div>
        <div class="col-6">
          <p>Categorie</p>
          <select name="categProd" id="categProd">
            <option value="">--Choisissez une catégorie--</option>
            <option value="cat1">Cat 1</option>
            <option value="cat2">Cat 2</option>
            <option value="cat3">Cat 3</option>
            <option value="cat4">Cat 4</option>
          </select>
        </div>
        <div class="col-6">
          <p>Sous-catégorie</p>
          <select name="sousCategProd" id="sousCategProd">
            <option value="">--Choisissez une sous-catégorie--</option>
            <option value="souscat1">sousCat 1</option>
            <option value="souscat2">sousCat 2</option>
            <option value="souscat3">sousCat 3</option>
            <option value="souscat4">sousCat 4</option>
          </select>
        </div>
        <div class="col-6">
          <p>Prix</p>
          <input
            type="number"
            id="priceProd"
            name="priceProd"
            min="1"
            max="100"
          />
        </div>
        <div class="col-6">
          <p>Autres</p>
          <select name="otherCateg" id="otherCateg">
          <option value="">--Choisissez une option--</option>
          <option value="othercat1">otherCat 1</option>
          <option value="othercat2">otherCat 2</option>
          <option value="othercat3">otherCat 3</option>
          <option value="othercat4">otherCat 4</option>
        </select>
        </div>
      </div>
    </div>
    <div class="row">
      <button>Valider</button>
    </div>
  </div>
</template>

<script>
// import { computed } from '@vue/reactivity'
export default {
  name: "ModifProduit",
};
</script>

<!-- <style lang="scss">
  * {
            margin: 0;
            padding: 0;
        }
  .row{
    text-align: center;
  }
  button{
    background-color: #706b3b;
    border-radius: 5px;
    color: white;
  }
  h3 {
    text-align: center;
    background-color: #706b3b;
    color: white;
    padding-bottom: 5px;
  }
  #infos {
    background-color: #d6d2ab;
    padding: 5px;
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
</style> -->
