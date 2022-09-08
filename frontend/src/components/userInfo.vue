<template>

    <div class="container">
        <h1>Bienvenue</h1>
        <h2>{{ user.first_name }} {{ user.last_name }}</h2>
    </div>

</template>


<script>

// import axios from 'axios';

// Token analysis for collect the userId
var token = localStorage.getItem('token');
console.log('token : '+token);


export default 
{
    name: "UserInfo",
    data(){
        return{
            user: {}
        }
    },
    mounted(){
        // axios.post('http://localhost:9000/userinfo', {
        //     data: {},
        //     headers:{'authorization': token}
        // })
        // .then((response)=>{
        //     this.user = response.data
        //     console.log(response)
        // })
        // .catch((err) => console.log(err))
    }
};
</script>


<style></style>