<template>
    <div class="SignUpIn d-flex flex-column justify-content-around">

        <div>
            <router-link to="/SignIn">
                <button class="btn btn-secondary"> Connexion </button>
            </router-link>
        </div>

        <div>
            <router-link to="/SubScribe">
                <button class="btn btn-secondary"> Inscription </button>
            </router-link>
        </div>

    </div>

</template>



<script>

    export default {
        name: 'SignUpIn',
    }

</script>


<style>
    .SignUpIn {
        height: 100px;
        background-color: #cfdad8;
    }    
</style>