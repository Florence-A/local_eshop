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
                        <div v-for="(phone,i) in phones" :key="i">
                            <p>{{phone.number}}</p>
                        </div>
                    </div>

                    <div v-for="(adress,i) in adresses" :key="i">
                        <div class="col-6 border border-secondary">
                            <p>Adresse : {{adress.title}}</p>
                        </div>
                        <div class="col-6 border border-secondary">
                            <p>{{adress.number}} {{adress.street_name}}</p>
                            <p>{{adress.City.Postal_code.number}} {{adress.City.label}}</p>
                        </div>
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
            user     : {},
            phones   : [],
            adresses : [],
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
            this.user = response.data;
            this.phones = response.data.Phones;
            //
            this.adresses = response.data.Adresses;
            console.log(this.adresses);
            //
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