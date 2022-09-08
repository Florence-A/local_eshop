<template>
    <div class="container">
        <div>{{msg}}</div>
        <input class="form-control" v-model="mail" type="text" placeholder="Adresse mail"><br>
        <input class="form-control" v-model="password" type="password" placeholder="Mot de passe"><br>
        <button @click="send(m,p)" class="btn btn-primary">Se connecter</button>
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
                        location.assign( '/SignUpIn' )
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
    .container {
        max-width: 600px;
    }
</style>