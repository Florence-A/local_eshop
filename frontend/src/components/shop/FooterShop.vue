<template>
    <div id="FooterShop">
        <div class="row" id="liens">
            <router-link to="/shop">
                <div class="col-3">Accueil</div>
            </router-link>
            <router-link to="/shop">
                <div class="col-3">Profil</div>
            </router-link>
            <router-link to="/shop">
                <div class="col-3">Contact</div>
            </router-link>
            <router-link to="/shop">
                <div class="col-3">Facebook</div>
            </router-link>
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
            // position: relative;
            // display: flex;
            // justify-content: space-between;
            align-items: center;
            background-color: #2f9789;
            border-color : #3eb9a9 #267a6f #267a6f #3eb9a9;
            border-style: solid;
            border-width: 3px;
            box-shadow: 2px 2px 2px #144d45;
            display: inline;
            float: left;
        }
        #mentions{
            background-color: #195f56;
            color: white;
            text-align: center;
            padding-top: 5px;
            border-color : #26887b #144d45 #144d45 #26887b;
            border-style: solid;
            border-width: 3px;
        }
    }
</style>