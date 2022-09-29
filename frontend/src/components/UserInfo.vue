<template>

    <div class="UserInfo">
        
        <h3>Mon compte</h3>

        <h4>Mon email</h4>
        <div class="info identity">
            <p class="mail id-b">Mail : {{user.mail}}</p>
        </div>

        <h4>Mes infos</h4>
        <div class="info infos">
            <p class="name id-b" v-if="user.first_name && user.last_name">{{user.first_name}} {{user.last_name}}</p>
            <p class="name id-b" v-else>Vous n'avez pas renseigné de nom ou prénom</p>

            <div class="phone-b id-b">
                <p>Téléphone(s) :</p>
                <div v-if=" user.Phones.length === 0" >
                    <p>Vous n'avez renseigné aucun numéro de téléphone</p>
                </div>
                <div v-else class="phones" v-for="(phone,i) in user.Phones" :key="i">
                    <p>{{phone.number}}</p>
                </div>
            </div>
        </div>

        <h4>Mon adresse</h4>
        
        <div  class="info adresses">
            <div v-if=" user.Adresses.length === 0" >
                <p>Vous n'avez renseigné aucune adresse</p>
            </div>
            <div v-else class="box-adr" v-for="(adress,i) in user.Adresses" :key="i">

                <p class="title">{{adress.title}}</p>
                <p>{{adress.number}} {{adress.street_name}}</p>
                <p>{{adress.City.Postal_code.number}} {{adress.City.label}}</p>

            </div>
        </div>

        <router-link to="/shop/UserUpdate">
            <button class="button btn-primary">Modifier</button>
        </router-link>
        

    </div>

</template>


<script>

import axios from 'axios';


export default 
{
    name: "UserInfo",
    data(){
        return{
            user     : {
                Phones: [],
                Adresses: []
            }
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
            console.log( this.user )
        })
        .catch((err) => console.log(err))
    }
};
</script>


<style>
    .UserInfo{
        background-color: #cfdad8;
        padding         : 40px 20px 20px 20px;
    }
    .name{
        font-weight : bold;
    }

    
    .id-b{
        border : green solid 1px;
        width : 280px;
    }

    /* adresses */
    .info {
        display : flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .box-adr {
        border : green solid 1px;
        margin : 5px;
        width : 280px;
        
    }
    .title {
        text-decoration: underline;
        font-weight: bold;
    }
    h3, h4 {
        max-width: 60%;
        margin: 10px auto;
    }

</style>