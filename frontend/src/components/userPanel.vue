<template>

    <div class="container d-flex flex-column align-items-center justify-content-around">

        <router-link to="/userInfo" class="d-inline-flex">
            <button class="btn btn-primary"> Mon profil </button>
        </router-link>

        <router-link to="" class="d-inline-flex">
            <button class="btn btn-primary"> Modifier mon profil </button>
        </router-link>

        <router-link to="" class="d-inline-flex">
            <button class="btn btn-primary"> Déconnexion </button>
        </router-link>
        
    </div>

    <!-- TODO+ : favoris button, order button-->

</template>



<script>

    export default {
        name: 'userPanel',
    }

</script>


<style>
.container{
    height: 150px;
}
</style>