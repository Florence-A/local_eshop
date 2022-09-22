<template>

    <div class="UserPanel d-flex flex-column align-items-center justify-content-start">

        <router-link to="/shop/UserInfo" class="d-inline-flex">
            <button class="btn btn-primary"> Mon profil </button>
        </router-link>

<<<<<<< HEAD:frontend/src/components/userPanel.vue
        <router-link to="/UserPanel" class="d-inline-flex">
=======
        <br>

        <router-link to="" class="d-inline-flex">
>>>>>>> flo:frontend/src/components/shop/UserPanel.vue
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