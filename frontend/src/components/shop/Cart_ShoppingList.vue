<template>
    <div class="row">
        <h1>Liste des achats</h1>
        <Products_Row></Products_Row>
        <div id="totalachat">
            <h3>Total commande</h3>
            <p>Prix en €</p>
        </div>
    </div>   
</template>

<script>
// import { computed } from '@vue/reactivity'

// COMPONENTS
import Products_Row from './Products_Row.vue';

export default {
    components: { Products_Row }
}
</script>

<style lang="scss">
</style>