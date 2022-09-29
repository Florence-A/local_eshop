<template>


    <div id="HeaderCMS">
        
        <div id="menu">
        <router-link to="/">
            <div class="col" id="logo"><img src="../assets/images/logo.svg" alt="logo icon"></div>
        </router-link>
        <router-link to="/SignUpIn">
            <div class="col" id="user">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#4dd4c2" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" 
                style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512">
                    <g>
                        <circle cx="256" cy="128" r="128"/>
                        <path d="M256,298.667c-105.99,0.118-191.882,86.01-192,192C64,502.449,73.551,512,85.333,512h341.333   c11.782,0,21.333-9.551,21.333-21.333C447.882,384.677,361.99,298.784,256,298.667z"/>
                    </g>
                </svg>
            </div>
        </router-link>
        <router-link to="/DashBoard/">
            <div class="col" id="DashBoard">
                <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="512" height="512">
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"/>
                </svg>
            </div>
        </router-link>
         <router-link to="/shop/">
            <div class="col" id="shop">
                <svg xmlns="http://www.w3.org/2000/svg" id="Filled" fill="#4dd4c2" viewBox="0 0 24 24" width="512" height="512">
                    <path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077Z"/>
                    <circle cx="7" cy="22" r="2"/><circle cx="17" cy="22" r="2"/>
                </svg>
            </div>
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
div#HeaderCMS{
    border-color :  #b9b166 #b9b166 #706b3c  #706b3c   ;
    border-style: solid;
    border-width: 3px;
}
</style>