<template>

    <div class="UserPanel">

        <router-link to="./UserInfo">
            <button> Mon profil </button>
        </router-link>

        <br>

        <router-link to="">
            <button> Mes commandes </button>
        </router-link>

        <br>

        <router-link to="">
            <button> Déconnexion </button>
        </router-link>
        
    </div>

    <!-- TODO+ : favoris button, order button-->

</template>



<script>

    export default {
        name: 'UserPanel',
    }

</script>


<style>

</style>