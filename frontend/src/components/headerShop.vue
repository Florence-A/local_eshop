<template>

    <div class="row" id="HeaderShop">

        <div class="col-4" id="logo"><img src="../assets/logo.svg" alt="logo icon"></div>

        <div class="col-8" id="menu">
            <div class="col" id="user">
                <router-link to="/SignUpIn">
                <img src="../assets/user.svg" alt="user icon">
                </router-link>
            </div>

            <div class="col" id="favorite">
                <img src="../assets/favorite.svg" alt="favorite icon">
            </div>
            
            <div class="col" id="cart">
                <img src="../assets/cart.svg" alt="cart icon">
            </div>
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
        justify-content: space-between;
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