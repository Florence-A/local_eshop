<template>
  <div class="box" id="AjouterProduit">
    <div class="row">
      <h2>Ajouter un produit</h2>
    </div>
    <div class="row" id="infos">
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
        <select  v-model="categProd" id="categProd">
          <option disabled selected value="">--Choisissez une catégorie--</option>
          <option @click="send(categProd)" v-for="category in parentCategories" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
      </div>
      <div class="col-6">
        <p>Sous-catégorie</p>
        <select v-model="sousCategProd" id="sousCategProd">
          <option disabled selected value="">--Choisissez une catégorie--</option>
          <option v-for="category in childCategories" :key="category.id" :value="category.id">{{ category.name }}</option>
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
      <div class="col-6" v-for="feature in features" :key="feature.id" :value="feature.id">
        <p>{{ feature.name }}</p>
        <select v-model="feat" id="feature" @focus="loadFeatures(feature.id)">
          <option disabled selected value="">--Choisissez une option--</option>
          <option v-for="featureValue in featureValues" :key="featureValue.id" :value="featureValue.id">{{ featureValue.value }}</option>
        </select>
      </div>
    </div>
    <div class="row">
      <button>Valider</button>
    </div>
  </div>
</template>

<script>

  import axios from 'axios';
  // import { computed } from '@vue/reactivity'

  export default {
    
    name: "AjouterProduit",
    data(){
      return{
        parentCategories: [],
        childCategories: [],
        features: [],
        featureValues: [],
        categProd: ""
      }
    },
    methods: {
      send(categ){
        categ = this.categProd
        axios.post('http://localhost:9000/products/childCategories/', {
          categ: categ
        }).then( resp=> {
          this.childCategories = resp.data
        })
      },
      loadFeatures(feature_id){
        axios.post('http://localhost:9000/products/childCategories/', {
          feature_id: feature_id
        }).then( resp=> {
          this.featureValues = resp.data
          console.log(resp.data)
        })
      }
    },
    mounted(){

      axios.get('http://localhost:9000/products/parentCategories/')
        .then( resp =>{
          this.parentCategories = resp.data
          console.log(resp.data)
        })
        
      axios.get('http://localhost:9000/products/features/')
        .then( resp =>{
          this.features = resp.data
          console.log(resp.data)
        })

    }
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
    margin-bottom: 2px;
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
