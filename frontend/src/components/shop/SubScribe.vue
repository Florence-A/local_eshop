<template>
    <div class="SubScribe">
        <div class="form_wrapper">
            <h1>Inscription</h1>
            
            <div class="g-info flex-b">
                <label for="fn"> Prénom </label>
                <input class="form_input" v-model="first_name"       id="fn"     type="text"     placeholder="Prénom"        maxlength="22"> <br>
                
                <label for="ln"> Nom </label>
                <input class="form_input" v-model="last_name"        id="ln"     type="text"     placeholder="Nom"           maxlength="22"> <br>
                
                <label for="ph"> N° de téléphone </label>
                <input class="form_input" v-model="phone"            id="ph"     type="text"     placeholder="Téléphone"     maxlength="10"> <br>
            </div>
            <div class="g-address flex-b">
                <label for="nu"> N° de rue </label>
                <input class="form_input num" v-model="number"       id="nu"     type="text"     placeholder="N°"            maxlength="5"    >  <br>
                
                <label for="sn"> Nom de rue </label>
                <input class="form_input" v-model="street_name"      id="sn"     type="text"     placeholder="Rue/Lieu-dit"  maxlength="30"> <br>
                
                <label for="pc" > Code postal </label>
                <input class="form_input" v-model="postal_code"      id="pc"     type="text"     placeholder="Code Postal"   maxlength="5"   minlength="5"> <br>
                
                <label for="c" > Ville </label>
                <input class="form_input" v-model="city"             id="c"      type="text"     placeholder="Ville"         maxlength="25"> <br>
            </div>
            <div class="g-ids flex-b">
                <label for="m"> E-mail </label>
                <input class="form_input" v-model="mail"             id="m"      type="text"     placeholder="Adresse mail">                 <br>
                
                <label for="pw"> Mot de passe </label> 
                <input class="form_input" v-model="password"        id="pw"     type="password" placeholder="Mot de passe">                 <br>
            </div>
        </div>
        <div class="msg">{{msg}}</div>

        <button @click="send(ln,fn,m,p,ph,nb,st,pc,c)" class="btn btn-primary g-btn">S'inscrire</button>
        
        
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
        padding         : 40px 0px 0px 0px;
        width : 100%;
    }
    
    .msg {
        color: purple;
        margin-bottom : 15px;
        
    }

        
    /* Params Grid */
    .msg{       grid-area : msg ;}
    .g-info{    grid-area : info ;}
    .g-address{ grid-area : ad ;}
    .g-ids{     grid-area : ids ;}
    .g-btn{     grid-area : bt ;}


    /* Phones */
    @media screen and (min-width: 250px){
        .form_wrapper {
            max-width   : 225px;
            margin      : auto;
        }
    }
    /* iPads,Tablets */
    @media screen and (min-width: 480px){
        .form_wrapper {
            max-width   : 300px;
            margin      : auto;
        }
    }
    /* Small screens, laptops */
    @media screen and (min-width: 769px){
        .form_wrapper {
            max-width   : 350px;
            margin      : auto;
        }
    }
    /* Large screens, desktops */
    @media screen and (min-width: 1025px){
        .form_wrapper {
            max-width   : 375px;
            margin      : auto;
        }
    }
    /* Extra screens */
    @media screen and (min-width: 1281px){
        .form_wrapper {
            max-width   : 500px;
            margin      : auto;
            display     : grid;
            grid-template-areas: ".     ad"
                                "info  ad" 
                                "ids   ids"
                                "msg   msg"
                                "bt    bt";
        }
        .flex-b {
            justify-content: flex-end;
        }
        .g-info{  
            margin-right :20px;
        }
        .g-address{ 
            margin-left :20px;
        }
    }
</style>