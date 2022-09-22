<template>


    <div id="HeaderCMS">
        
        <div id="menu">
        <router-link to="/">
            <div class="col" id="logo"><img src="../assets/logo.svg" alt="logo icon"></div>
        </router-link>
        <router-link to="/SignUpIn">

            <div class="col" id="user"><img src="../assets/user.svg" alt="user icon"></div>
        </router-link>
        <router-link to="/shop/FavoriteItems">
            <div class="col" id="favorite"><img src="../assets/favorite.svg" alt="favorite icon"></div>
        </router-link>
        <router-link to="/shop/CartPage">
            <div class="col" id="cart"><img src="../assets/cart.svg" alt="cart icon"></div>
        </router-link>
            
        </div>
    </div>

</template>

<script>
// import { computed } from '@vue/reactivity'
export default {
    id:"HeaderCMS",
    props:{
    
    }
}
</script>

<style lang="scss">
#HeaderCMS{
    *{
    margin: 0;
    padding: 0;
    }
    background-color: #9b9454;
    #logo{
        position: relative;
        img{
            width: 50px;
            margin: 5px;
            padding: 5px;
        }
    }
    #menu{
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;
        #user{
            img{
                width: 30px;
                height: 30px;
                margin: 10px;
                padding: 5px;

            }
        }
        #favorite{

            img{
                width: 30px;
                margin: 10px;
                padding: 5px;
            }
        }
        #cart{

            img{
                width: 30px;
                margin: 10px;
                padding: 5px;
            }
        }
    }
}
</style>