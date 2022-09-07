<template>

    <div class="container">
        <h1>Bienvenue</h1>
        <h2>{{ user.first_name }} {{ user.last_name }}</h2>
    </div>

</template>


<script>

import axios from 'axios';


export default 
{
    name: "UserInfo",
    data(){
        return{
            user: {}
        }
    },

    mounted(){

        var token = localStorage.getItem('token');
        
        axios.post('http://localhost:9000/userinfo', {
            headers:{'authorization': token}
        })
        .then((response)=>{
            this.user = response.data
            console.log(response)
        })
        .catch((err) => console.log(err))
    }
};
</script>


<style></style>