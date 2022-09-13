<template>
    <div class="SubScribe">
        <div class="wrapper d-flex flex-column justify-content-center">
            <div class="msg">{{msg}}</div>
            <input class="form-control" v-model="first_name" type=text placeholder="Prénom"><br>
            <input class="form-control" v-model="last_name" type=text placeholder="Nom"><br>
            <input class="form-control" v-model="mail" type="text" placeholder="Adresse mail"><br>
            <input class="form-control" v-model="password" type="password" placeholder="Mot de passe"><br>
        </div>
        <br>
        <button @click="send(ln,fn,m,p)" class="btn btn-primary">S'inscrire</button>
    </div>
</template>

<script>

    import axios from 'axios' ;

    export default 
    {
        name: 'SubScribe',

        data(){
            return {
                last_name :"",
                first_name:"",
                mail      :"",
                password  :"",
                msg       :""
            }
        },

        methods: {

            send(ln,fn,m,p){
                // Params
                ln = this.last_name ;
                fn = this.first_name ;
                m  = this.mail ;
                p  = this.password ;
                
                // Request
                axios.post( 'http://localhost:9000/signup' ,{
                    last_name : ln, 
                    first_name: fn, 
                    mail      : m, 
                    password  : p
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