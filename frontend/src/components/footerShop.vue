<template>
    <div id="FooterShop">
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
    id:"FooterShop",
    props:{
    
    }
}
</script>

<style lang="scss">
    #FooterShop{
        *{
            margin: 0;
            padding: 0;
        }
        a{
            color: white;
            text-decoration: none;
            margin : 5px;
            padding : 5px;
        }
        a:hover{
            color: #195f56;;
        }
        #liens{
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #2f9789;
        }
        #mentions{
            background-color: #195f56;
            color: white;
            text-align: center;
            padding-top: 5px;
        }
    }
</style>