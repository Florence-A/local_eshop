<template>

    <div class="UserPanel d-flex flex-column align-items-center justify-content-around">

        <router-link to="/UserInfo" class="d-inline-flex">
            <button class="btn btn-primary"> Mon profil </button>
        </router-link>

        <router-link to="/UserPanel" class="d-inline-flex">
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
        name: 'UserPanel',
    }

</script>


<style>
.UserPanel{
    height: 200px;
    background-color: #cfdad8;
    padding: 20px;
}
a{
    text-decoration: none;
}
</style>