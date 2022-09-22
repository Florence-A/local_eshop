<<<<<<< HEAD:frontend/src/components/ItemsRow.vue
<template>
    <div class="ItemsRow">
        <h2 class="title">
            Nos articles
            <!-- {{ toto }}  je peux appeler mon props déclaré ds home -->
        </h2>
        <div class="wrapper--card">
            <div v-for="data in dataItem" :key="data.id">
                <h2>{{data._ref}}</h2>
                <div>
                    {{data.image}}
                </div>
                <div>
                    <p>{{data.description}}</p>
                    <p>{{data.HT_price}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import ItemCard from './ItemCard.vue';
import axios from 'axios'

export default {
    name: "ItemsRow",
    components:{
        // ItemCard, // initialisation
    },


    data(){
        return {
            dataItem: {}
        }
    },

    mounted(){
        axios.get('http://localhost:9000/products/')
        .then((response)=>{
            console.log(response.data)
            this.dataItem = response.data
            
        })
    }
}
</script>

<style lang="scss">
.ItemsRow{
    .title{
        font-size: 2.5rem ;
    } 
}

=======
<template>
    <div class="ItemsRow">
        <h2 class="title">
            Nos articles
            <!-- {{ toto }}  je peux appeler mon props déclaré ds home -->
        </h2>
        <div class="wrapper--card">
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <!-- <articles-card v-for="(card, index) in three_articles" :info_articles="card" :key="index"/>  vfor boucle -->
            <!-- card => nom de l'element à chaque tour de boucle. articles-card = card-->
            <!--  index est généré automatiquement par vuejs -->
            <!-- in 3 => nbre d'itérations de boucle qu'on change par three_articles-->
            <!-- la clé de chaque carte sera l'index (qui fera +1 à chaque carte) -->
        </div>
        
    </div>
</template>

<script>
import ItemCard from './ItemCard.vue';

export default {
    name: "ItemsRow",
    components:{
        ItemCard, // initialisation
    },

    props:{
        three_articles: Array
    }
}
</script>

<style lang="scss">
.ItemsRow{
    .title{
        font-size: 2.5rem ;
    } 
}

>>>>>>> flo:frontend/src/components/shop/ItemsRow.vue
</style>