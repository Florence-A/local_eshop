<template>
    <div id="FooterCMS">
        <div class="row" id="liens">
            <div class="col-3" name="col1">
                <a href="#BACKTOTOP">Accueil</a> 
            </div>
            <div class="col-3" name="col2">
                <a href="#BACKTOMONPROFIL">Profil</a> 
            </div>
            <div class="col-3" name="col3">
                <a href="#BACKTOINFOPRATIQUES">Contact</a> 
            </div>
            <div  class="col-3" name="col4">
                <a href="#BACKTOINFOPRATIQUES">Facebook</a> 
            </div>
        </div>
        <div class="row" id="mentions">
            <div class="col" name="col1">
                <p>Mentions légales &copy; 2022</p>
            </div>
        </div>
    </div>
</template>

<script>
// import { computed } from '@vue/reactivity'
export default {
    id:"FooterCMS",
    props:{
    
    }
}
</script>

<style lang="scss">
    #liens{
        background-color: #706b3b;
        border-color : #8d874e #8d874e #57522c #57522c;
        border-style: solid;
        border-width: 3px;
        padding-top: 5px ;
    }
    #mentions{
        background-color: #706b3b;
        border-color : #8d874e #8d874e #57522c #57522c;
        border-style: solid;
        border-width: 3px;
        padding-top: 5px ;
    }
</style>