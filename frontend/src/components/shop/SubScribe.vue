<template>
    <div class="SubScribe">
        <div class="wrapper d-flex flex-column justify-content-center">
            <div class="msg">{{msg}}</div>
            <input class="form-control" v-model="first_name"    type="text"     placeholder="Prénom"        maxlength="22"> <br>
            <input class="form-control" v-model="last_name"     type="text"     placeholder="Nom"           maxlength="22"> <br>
            <input class="form-control" v-model="phone"         type="text"     placeholder="Téléphone"      maxlength="10">  <br>
            <input class="form-control" v-model="number"        type="text"     placeholder="N°Rue"         maxlength="5">  <br>
            <input class="form-control" v-model="street_name"   type="text"     placeholder="Rue/Lieu-dit"  maxlength="30"> <br>
            <input class="form-control" v-model="postal_code"   type="text"     placeholder="Code Postal"   maxlength="5">  <br>
            <input class="form-control" v-model="city"          type="text"     placeholder="Ville"         maxlength="25"> <br>
            <input class="form-control" v-model="mail"          type="text"     placeholder="Adresse mail">                 <br>
            <input class="form-control" v-model="password"      type="password" placeholder="Mot de passe">                 <br>
        </div>
        <br>
        <button @click="send(ln,fn,m,p,ph,nb,st,pc,c)" class="btn btn-primary">S'inscrire</button>
    </div>
</template>

<script>

    import axios from 'axios' ;

    export default 
    {
        name: 'SubScribe',

        data(){
            return {
                last_name   :"",
                first_name  :"",
                mail        :"",
                password    :"",
                phone       :"",
                number      :"",
                street_name :"",
                postal_code :"",
                city        :"",
                msg         :""
            }
        },

        methods: {

            send(ln,fn,m,p,ph,nb,st,pc,c){
                // Params
                ln = this.last_name ;
                fn = this.first_name ;
                m  = this.mail ;
                p  = this.password ;
                ph = this.phone ;
                nb = this.number ;
                st = this.street_name ;
                pc = this.postal_code ;
                c  = this.city ;
                
                // Request
                axios.post( 'http://localhost:9000/signup' ,{
                    last_name   : ln, 
                    first_name  : fn, 
                    mail        : m, 
                    password    : p,
                    phone       : ph,
                    number      : nb,
                    street_name : st,
                    postal_code : pc,
                    city        : c,
                })
                .then((res)=>{ 
                    this.msg = res.data.msg; 
                })
                .catch((err) => { console.log(err) })                
            }
        }
    }
</script>

<style>
    
    .SubScribe {
        background-color: #cfdad8;
        padding         : 40px 20px 20px 20px;
        height          : 100vh;
    }
    .wrapper {
        max-width   : 300px;
        margin      : auto;
    }
    .msg {
        color: purple;
    }
</style>