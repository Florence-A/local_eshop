<template>
    <div class="row">
        <div class="col-12" id="PendingTitle"><h4> Commandes en cours</h4></div>
        <div class="wrapper--card">
            <PendingOrder></PendingOrder>
            <PendingOrder></PendingOrder>
            <PendingOrder></PendingOrder>
            <!-- <commande v-for="(commande, index) in three_articles" :info_articles="card" :key="index"/>  vfor boucle -->
            <!-- card => nom de l'element à chaque tour de boucle. articles-card = card-->
            <!--  index est généré automatiquement par vuejs -->
            <!-- in 3 => nbre d'itérations de boucle qu'on change par three_articles-->
            <!-- la clé de chaque carte sera l'index (qui fera +1 à chaque carte) -->
        </div>
    </div>
</template>

<script>
// import { computed } from '@vue/reactivity'

// COMPONENTS
import PendingOrder from '../components/PendingOrder.vue'
export default {
    components: { PendingOrder }
}
</script>

<style lang="scss">
#PendingTitle
    {
        background-color: #195f56;
        color: #eafffc;
    }
</style>