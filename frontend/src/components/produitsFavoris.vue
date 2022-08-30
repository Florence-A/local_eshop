<template>
    <div class="row">    
        <h4> Produits favoris</h4>
        <div class="wrapper--card">
            <articles-card v-for="(card, index) in three_articles" :info_articles="card" :key="index"/>  <!-- vfor boucle -->
            <!-- card => nom de l'element à chaque tour de boucle. articles-card = card-->
            <!--  index est généré automatiquement par vuejs -->
            <!-- in 3 => nbre d'itérations de boucle qu'on change par three_articles-->
            <!-- la clé de chaque carte sera l'index (qui fera +1 à chaque carte) -->
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity'
export default {
    
}
</script>

<style lang="scss">
h1, h2, h3, h4, h5{
        text-align: center;
        padding-top: 2px;
        margin-top: auto;
    }
    #titre
    {
        background-color: #44c0b0;
        color: #eafffc;
    }
    #nomprod{
        background-color: #2f9789;
    }
    #prod{
        background-color: #dfeeec;
    }
</style>