<template>
    <div class="SignIn">
        <div class="wrapper">
            <div class="msg">{{msg}}</div><br>
            <input class="form-control" v-model="mail"      type="text"     placeholder="Adresse mail"><br>
            <input class="form-control" v-model="password"  type="password" placeholder="Mot de passe"><br>
            <br>
            <button @click="send()" class="btn btn-primary">Se connecter</button>
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


        // Action for button
        methods: {

            send(){                
                // Request
                axios.post( 'http://localhost:9000/signin' ,{
                    mail    : this.mail, 
                    password: this.password
                    })

                .then((res)=>{
                    console.log(res.data)
                    // Token storage
                    if (res.data.token != "err"){
                        localStorage.setItem( 'token', res.data.token );
                        localStorage.setItem( 'userId', res.data.userId );
                        localStorage.setItem( 'userRole', res.data.userRole );
                        
                        if(res.data.token != null){
                            location.assign( '/shop/UserPanel' )
                        }
                        else {
                            this.msg = res.data.msg;
                        }
                    } 
                    else {
                        this.msg = res.data.msg;
                    }
                })
                .catch((err) => { console.log(err) })                
            }
        }
    }
</script>


<style>
    .SignIn {
        background-color : #cfdad8;
        padding          : 40px 20px 20px 20px;
        height           : 100vh;
    }
    .wrapper {
        max-width   : 300px;
        margin      : auto;
    }
    .msg {
        color: purple;
    }
</style>