<template>
    <div class="row">
        <div class="col-12" id="titre"><h4> Commande n°XXXX</h4></div>
        <div class="wrapper--card">
            <commande v-for="(commande, index) in three_articles" :info_articles="card" :key="index"/>  <!-- vfor boucle -->
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
#titre
    {
        background-color: #44c0b0;
        color: #eafffc;
    }
</style>