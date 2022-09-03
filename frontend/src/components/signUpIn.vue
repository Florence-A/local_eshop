<template>
    <router-link to="/signIn">
        <button class="btn btn-primary"> Connexion </button>
    </router-link>
    <br><br>
    <router-link to="/subScribe">
        <button class="btn btn-primary"> Inscription </button>
    </router-link>
</template>

<script>
export default {
    name: 'signUpIn',
}
</script>

<style>
button {
    border : 1px black solid ;    
}
</style>