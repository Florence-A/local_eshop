<template>


    <div id="HeaderCMS">
        
        <div id="menu">
        <router-link to="/">
            <div class="col" id="logo"><img src="../assets/images/logo.svg" alt="logo icon"></div>
        </router-link>

        <router-link to="/SignUpIn/">
            <div class="col" id="user"><img src="../assets/images/user.svg" alt="user icon"></div>
        </router-link>

        <router-link to="/DashBoard/">
            <div class="col" id="user"><img src="../assets/images/dashboard.svg" alt="user icon"></div>
        </router-link>

        <router-link to="/shop/">
            <div class="col" id="favorite"><img src="../assets/images/shop.svg" alt="favorite icon"></div>
        </router-link>
            
        </div>
    </div>

</template>

<script>
// import { computed } from '@vue/reactivity'
export default {
    name:"HeaderCMS",
    props:{
    
    }
}
</script>

<style lang="scss">
// #HeaderCMS{
//     *{
//     margin: 0;
//     padding: 0;
//     }
//     div{
//       background-color: #9b9454;  
//     }
    
//     #logo{
//         position: relative;
//         img{
//             width: 50px;
//             margin: 5px;
//             padding: 5px;
//         }
//     }
//     #menu{
//         position: relative;
//         display: flex;
//         justify-content: space-around;
//         align-items: center;
//         #user{
//             img{
//                 width: 30px;
//                 height: 30px;
//                 margin: 10px;
//                 padding: 5px;

//             }
//         }
//         #favorite{

//             img{
//                 width: 30px;
//                 margin: 10px;
//                 padding: 5px;
//             }
//         }
//         #cart{

//             img{
//                 width: 30px;
//                 margin: 10px;
//                 padding: 5px;
//             }
//         }
//     }
// }
</style>