<template>
    <div class="SignUpIn d-flex flex-column justify-content-around">

        <div>
            <router-link to="/shop/SignIn">
                <button class="btn btn-primary"> Connexion </button>
            </router-link>
        </div>


        <div>
            <router-link to="/shop/SubScribe">
                <button class="btn btn-primary"> Inscription </button>
            </router-link>
        </div>

        <router-link to="/shop/SubScribe">
            <button class="btn btn-primary"> Inscription </button>
        </router-link>

    </div>


</template>



<script>

    export default {
        name: 'SignUpIn',
    }

</script>


<style>
    .SignUpIn {
        height: 150px;
        background-color: #cfdad8;
        padding: 20px;
    }    
    
</style>