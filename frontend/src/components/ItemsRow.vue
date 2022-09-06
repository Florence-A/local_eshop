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

</style>