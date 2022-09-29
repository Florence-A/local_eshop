<template>
    <div class="SignUpIn d-flex flex-column justify-content-start">

        <div>
            <router-link to="/shop/SignIn">
                <button class="btn btn-primary"> Connexion </button>
            </router-link>
        </div>

        <br><br>

        <div>
            <router-link v-if="originCms" :to="{ name: 'cmsSubScribe', params: { fromCms: originCms } }">
                <button class="btn btn-primary"> Inscription </button>
            </router-link>
            <router-link v-else :to="{ name: 'SubScribe', params: { fromCms: originCms } }">
                <button class="btn btn-primary"> Inscription </button>
            </router-link>

        </div>


    </div>


</template>



<script>

    export default {
        name: 'SignUpIn',
        props: {
            originCms: Boolean
        },
        
        mounted() {
            console.log(this.originCms)
        },
    }

   

</script>


<style>
    .SignUpIn {
        height          : 100%;
        background-color: #cfdad8;
        padding         : 50px 20px 20px 20px;
    }    
    
</style>