<template>


    <div id="HeaderCMS">
        
        <div id="menu">
        <router-link to="/">
            <div class="col" id="logo"><img src="../../assets/images/logo.svg" alt="logo icon"></div>
        </router-link>
        <router-link v-if="userConnected" to="/UserPanel">
            <div class="col" id="user">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#4dd4c2" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512">
                    <g>
                        <circle cx="256" cy="128" r="128"/>
                        <path d="M256,298.667c-105.99,0.118-191.882,86.01-192,192C64,502.449,73.551,512,85.333,512h341.333   c11.782,0,21.333-9.551,21.333-21.333C447.882,384.677,361.99,298.784,256,298.667z"/>
                    </g>
                </svg>
            </div>
        </router-link>
        <router-link v-else to="/SignUpIn">
            <div class="col" id="user">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#4dd4c2" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512">
                    <g>
                        <circle cx="256" cy="128" r="128"/>
                        <path d="M256,298.667c-105.99,0.118-191.882,86.01-192,192C64,502.449,73.551,512,85.333,512h341.333   c11.782,0,21.333-9.551,21.333-21.333C447.882,384.677,361.99,298.784,256,298.667z"/>
                    </g>
                </svg>
            </div>
        </router-link>
        <router-link to="/DashBoard/">
            <div class="col" id="DashBoard">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"><path d="M21 21h-8v-6h8v6Zm-10 0H3V11h8v10Zm10-8h-8V3h8v10ZM11 9H3V3h8v6Z"/></svg>
            </div>
        </router-link>
         <router-link to="/shop/">
            <div class="col" id="shop">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"><path d="M882 272.1V144c0-17.7-14.3-32-32-32H174c-17.7 0-32 14.3-32 32v128.1c-16.7 1-30 14.9-30 31.9v131.7a177 177 0 0 0 14.4 70.4c4.3 10.2 9.6 19.8 15.6 28.9v345c0 17.6 14.3 32 32 32h274V736h128v176h274c17.7 0 32-14.3 32-32V535a175 175 0 0 0 15.6-28.9c9.5-22.3 14.4-46 14.4-70.4V304c0-17-13.3-30.9-30-31.9zm-72 568H640V704c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v136.1H214V597.9c2.9 1.4 5.9 2.8 9 4c22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1c.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1c24.4 0 48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1c.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1c24.4 0 48-4.7 70.4-14.1c3-1.3 6-2.6 9-4v242.2zm0-568.1H214v-88h596v88z"/></svg>
            </div>
        </router-link>
            
        </div>
    </div>

</template>

<script>
// import { computed } from '@vue/reactivity'
export default {
    name:"HeaderCMS",
    data(){
        return{
            userConnected: localStorage.token
        }
    }
}
</script>

<style lang="scss">
div#HeaderCMS{
    border-color :  #b9b166 #b9b166 #706b3c  #706b3c   ;
    border-style: solid;
    border-width: 3px;
}
svg{
    fill: #706b3c;
    width: 20px;
    height: 20px;
}
</style>