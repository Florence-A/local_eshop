<template>


    <div id="HeaderShop">
        
        <div id="menu">
        <router-link to="/">
            <div class="col" id="logo"><img src="../../assets/images/logo.svg" svg alt="logo icon"></div>
        </router-link>

        <router-link to="/shop/SignUpIn">
            <div class="col" id="user"><img src="../../assets/images/user.svg" alt="user icon"></div>
        </router-link>

        <router-link to="/shop/FavoriteItems">
            <div class="col" id="favorite"><img src="../../assets/images/favorite.svg" alt="favorite icon"></div>
        </router-link>

        <router-link to="/shop/CartPage">
            <div class="col" id="cart"><img src="../../assets/images/cart.svg" alt="cart icon"></div>
        </router-link>
            
        </div>
    </div>

</template>

<script>
// import { computed } from '@vue/reactivity'
export default {
    id:"HeaderShop",
    props:{
    
    }
}
</script>

<style lang="scss">

#HeaderShop{
    *{
    margin: 0;
    padding: 0;
    }
    background-color: #2f9789;
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