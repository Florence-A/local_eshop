<template>
  <div class="box" id="AjouterProduit">
    <div class="row">
      <h2>Ajouter un produit</h2>
    </div>
    <div class="row" id="infos">
      <div class="col-6">
        <div><p>Nom</p></div>
        <div><input placeholder="Nom du produit" v-model="newProduct.name"/></div>
      </div>
      <div class="col-6">
        <p>Description</p>
        <textarea id="descriptionProd" v-model="newProduct.description"></textarea>
      </div>
      <div class="col-6">
        <p>Categorie</p>
        <select  v-model="newProduct.parentCategory" id="categProd">
          <option disabled selected value="">--Choisissez une catégorie--</option>
          <option @click="send(newProduct.parentCategory)" v-for="category in parentCategories" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
      </div>
      <div class="col-6">
        <p>Sous-catégorie</p>
        <select v-model="newProduct.childCategory" id="sousCategProd">
          <option v-if="newProduct.parentCategory === null" disabled selected value="">--Choisissez une catégorie--</option>
          <option v-else disabled selected value="">--Choisissez une sous-catégorie--</option>
          <option v-for="category in childCategories" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
      </div>
      <div class="col-6" v-for="feature in features" :key="feature.id">
        <p>{{ feature.name }}</p>
        <select>
          <option disabled selected value="">--Choisissez une {{ feature.name }}--</option>
          <option v-for="featureValue in feature.Feature_values" :key="featureValue.id" @click="addProductFeature(featureValue.id)">{{ featureValue.value }}</option>
        </select>
      </div>
      <div class="col-6">
        <p>Prix HT</p>
        <input
          type="number"
          id="priceProd"
          name="priceProd"
          min="1"
          max="100"
          step="0.01"
          placeholder="0.00€"
          v-model="newProduct.price"
        />
        <p>TVA</p>
        <select name="tva" id="tva" v-model="newProduct.tva">
          <option disabled selected value="">--Choisissez une TVA--</option>
          <option v-for="tva in tvas" :key="tva.id" :value="tva.id">{{ tva.rate }}</option>
        </select>
      </div>
      <div class="col-6">
        <p>Image(s)</p>
        <input 
          type="file"
          ref="imageFile"
          @change="loadImage()"
          accept="image/png, image/jpeg"
          multiple
          >
      </div>
    </div>
    <div class="row">
      <p>{{ msg }}</p>
    </div>
    <div class="row">
      <button @click="addNewProduct()">Valider</button>
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
        msg:"",

        tvas: [],
        parentCategories: [],
        childCategories: [],
        features: [],

        newProduct: {
          name: null,
          description: null,
          price: null,
          tva: null,
          parentCategory: null,
          childCategory: null,
          features: [],
        },
          images: [],
      }
    },
    methods: {
      send(categ){
        categ = this.newProduct.parentCategory
        axios.post('http://localhost:9000/products/childCategories/', {
          categ: categ
        }).then( resp=> {
          this.childCategories = resp.data
        })
      },

      addProductFeature(feature){
        this.newProduct.features.push(feature)
      },
      loadImage(){
        // console.log( this.$refs.imageFile.files )
        this.images = this.$refs.imageFile.files
      },
      addNewProduct(){
        const formData = new FormData()
        
        for( let i=0; i<=this.images.length-1; i++ ){
          let file = this.images[i]
          formData.append(`image[${i}]`, file)
        }
        
        formData.append('name', this.newProduct.name)
        formData.append('description', this.newProduct.description)
        formData.append('price', this.newProduct.price)
        formData.append('tva', this.newProduct.tva)
        formData.append('parentCategory', this.newProduct.parentCategory)
        formData.append('childCategory', this.newProduct.childCategory)
        for( let i=0; i<this.newProduct.features.length; i++){
          formData.append(`feature[${i}]`, this.newProduct.features[i])
        }
        
        
        axios.post('http://localhost:9000/products/new/', 
          formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
          })
        .then(resp =>{
          this.msg = resp.data.msg
          })
        .catch( err =>{
          this.msg = err.response.data.msg
        })
      }
    },
    mounted(){

      axios.get('http://localhost:9000/products/tvas/')
        .then( resp =>{
          this.tvas = resp.data
        })

      axios.get('http://localhost:9000/products/parentCategories/')
        .then( resp =>{
          this.parentCategories = resp.data
        })
        
      axios.get('http://localhost:9000/products/features/')
        .then( resp =>{
          this.features = resp.data
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
