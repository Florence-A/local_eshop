<template>
    <div class="SignIn">
        <div class="wrapper">
            <div>{{msg}}</div>
            <input class="form-control" v-model="mail" type="text" placeholder="Adresse mail"><br>
            <input class="form-control" v-model="password" type="password" placeholder="Mot de passe"><br>
            <button @click="send(m,p)" class="btn btn-primary">Se connecter</button>
        </div>
    </div>
</template>


<script>

    import axios from 'axios' ;

    export default 
    {
        name: 'SignIn',

        data(){
            return {
                mail    :"",
                password:"",
                msg     :""
            }
        },

        methods: {

            send(m,p){
                // Params
                m  = this.mail ;
                p  = this.password ;
                
                // Request
                axios.post( 'http://localhost:9000/signin' ,{
                    mail    : m, 
                    password: p
                    })

                .then((res)=>{

                    // Token storage
                    if (res.data.token != "err"){
                        localStorage.setItem( 'token', res.data.token );
                        location.assign( '/UserPanel' )

                    } 
                    else {
                        this.msg = "Mot de passe incorrect"
                    }
                })
                .catch((err) => { console.log(err) })                
            }
        }
    }
</script>


<style>
    .SignIn {
        background-color: #cfdad8;
        padding: 20px;
    }
    .wrapper {
        max-width: 300px;
        margin: auto;
    }
</style>