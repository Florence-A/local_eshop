<template>

    <div class="UserPanel d-flex flex-column align-items-center justify-content-start">

        <router-link to="./UserInfo" class="d-inline-flex">
            <button class="btn btn-primary"> Mon profil </button>
        </router-link>

        <br>

        <router-link to="" class="d-inline-flex">
            <button class="btn btn-primary"> Modifier mon profil </button>
        </router-link>

        <br>

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
    height          : 100vh;
    background-color: #cfdad8;
    padding         : 40px 20px 20px 20px;
}

a{
    text-decoration: none;
}
</style>