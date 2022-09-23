<template>

    <div class="UserInfo">
    
        <div class="row">
            
                <hr>
                    <h3>Mon compte</h3>
                <hr>
        
                    <p class="name">{{user.first_name}} {{user.last_name}}</p>
                

                <div class="row " id="table">
                    <div class="col-6 border border-secondary">
                        <p>E-Mail</p>
                    </div>
                    <div class="col-6 border border-secondary">
                        <p>{{user.mail}}</p>
                    </div>
                    <div class="col-6 border border-secondary">
                        <p>Téléphone</p>
                    </div>
                    <div class="col-6 border border-secondary">
                        <!-- <div v-for ...> -->
                        <p>{{user.phone1}}</p>
                        <p>{{user.phone2}}</p>
                    </div>
                    <div class="col-6 border border-secondary">
                        <p>Adresse</p>
                    </div>
                    <div class="col-6 border border-secondary">
                        <p>{{Adress}}</p>
                    </div>
                </div>
            
        </div>

        <br>
        <button class="button btn-primary">Modifier</button>
        <hr>

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
    .UserInfo{
        height          : 100vh;
        background-color: #cfdad8;
        padding         : 40px 20px 20px 20px;
    }
    .name{
        font-weight : bold;
    }
    #table{
        margin      : auto;
        max-width   : 500px;
    }
    p{
        line-height : 40px;
    }
</style>