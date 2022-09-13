<template>

    <div class="UserInfo">
        <h1>Bienvenue {{ user.first_name }},</h1>
        
    </div>

</template>


<script>

import axios from 'axios';


export default 
{
    name: "UserInfo",
    data(){
        return{
            user: {},
        }
    },

    mounted(){

        var token  = localStorage.getItem('token');
        var userId = localStorage.getItem('userId');
        
        axios.get('http://localhost:9000/userinfo', {
            headers : { 'authorization':token },
            body    : { 'userId':userId }
        })
        .then((response)=>{
            this.user = response.data
        })
        .catch((err) => console.log(err))
    }
};
</script>


<style>

</style>