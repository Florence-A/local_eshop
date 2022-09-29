<template>

    <div class="UserInfo">
        
        <h3>Mon compte</h3>

        <div class="identity">
            <p class="name id-b">Nom : {{user.first_name}} {{user.last_name}}</p>
            <p class="mail id-b">Mail : {{user.mail}}</p>

            <div class="phone-b id-b">
                <p>Téléphone(s) :</p>
                <div class="phones" v-for="(phone,i) in phones" :key="i">
                    <p>{{phone.number}}</p>
                </div>
            </div>

        </div>

        <h4>Adresse</h4>

        <div class="adresses">
            <div class="box-adr" v-for="(adress,i) in adresses" :key="i">

                <p class="title">{{adress.title}}</p>
                <p>{{adress.number}} {{adress.street_name}}</p>
                <p>{{adress.City.Postal_code.number}} {{adress.City.label}}</p>

            </div>
        </div>
    
        <br>
        <button class="button btn-primary">Modifier</button>

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
            console.log(response)
            this.phones = response.data.Phones;
            this.adresses = response.data.Adresses;
        })
        .catch((err) => console.log(err))
    }
};
</script>


<style>
    
    .name{
        font-weight : bold;
    }

    /* identity */
    .identity{
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    .id-b{
        border : #3b3817 solid 1px;
        width : 280px;
    }

    /* adresses */
    .adresses {
        display : flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
    .box-adr {
        border : #3b3817 solid 1px;
        margin : 5px;
        width : 280px;
        
    }
    .title {
        text-decoration: underline;
        font-weight: bold;
    }

</style>