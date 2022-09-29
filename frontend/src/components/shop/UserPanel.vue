<template>

    <div class="UserPanel d-flex flex-column align-items-center justify-content-start">

        <router-link to="shop/UserInfo" class="d-inline-flex">
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
    padding         : 40px 20px 20px 20px;}
.btn-primary{
    border: none;
    border-radius: 8px;
    border-color : #2e8d82 #0e3530 #0e3530 #2e8d82;
    border-style: solid;
    border-width: 3px;
    box-shadow: 2px 2px 2px #144d45;
    }


a{
    text-decoration: none;
}
</style>