<template>
    <div class="row" id="Cust_AccountInfos">
        <div class="row">
                <h3>Mon compte</h3>
        </div>
        <div class="row" id="infos">
            <div class="col-6">
                    <p>TEST</p>
                    <!-- <p>{{dataAccount.name}}</p> -->
            </div> 
            <div class="col-6">
                <p>TEST</p>
                    <!-- <p>{{dataAccount.avatar}}</p> -->
            </div>
            <div class="col-6">
                <p>TEST</p>
                    <!-- <p>{{dataAccount.mail}}</p> -->
            </div>
            <div class="col-6">
                <p>TEST</p>
                    <!-- <p>{{dataAccount.password}}</p> -->
            </div>
            <div class="col-6">
                <p>TEST</p>
                    <!-- <p>{{dataAccount.phone}}</p> -->
            </div>
            <div class="col-6">
                <p>TEST</p>
                    <!-- <p>{{dataAccount.adress}}</p> -->
            </div>
        </div>
    </div>

    <div class="row" id="Cust_AccountModify">
        <div class="row">
            <h3>Modifier mon compte</h3>
        </div>
        <div class="row" id="modifyInfo">
            <div class="col-6">
                <img src="../../assets/images/reglages.svg" alt="reglage">
                <p>Nom</p></div>
            <div class="col-6">
                <img src="../../assets/images/user.svg" alt="reglage">
                <p>Avatar</p>
            </div>
            <div class="col-6">
                <img src="../../assets/images/mail.svg" alt="reglage">
                <p>Mail</p>
            </div>
            <div class="col-6">
                <img src="../../assets/images/hours.svg" alt="reglage">
                <p>Mot de passe</p>
            </div>
            <div class="col-6">
                <img src="../../assets/images/phone.svg" alt="reglage">
                <p>Téléphone</p>
            </div>
            <div class="col-6">
                <img src="../../assets/images/location.svg" alt="reglage">
                <p>Adresse</p>
            </div>
            <div class="col-12">
                <button v-on:click="valider();" class="butValid">Valider</button>
            </div>
        </div>
    </div>


    <div class="row">
        <h4> Commandes en cours</h4>
        <div class="wrapper--card">
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
        </div>
    </div>

    <div class="row">    
        <h4> Commandes livrées</h4>
        <div class="wrapper--card">
            <div v-for="data in delivOrders" :key="data.id">
                <div class="top">
                    <h2 class="name">{{delivOrders.name}}</h2>
                    <p class="prix">{{delivOrders.description}} </p>
                    <p class="prix">{{delivOrders.HT_price}} €</p>
                    <div class="col-4" id="blocModif">
                        <p id="modify">
                            <button v-on:click="consulter();" class="butAchat">Consulter</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'CustomerAccountPageV2',
}
</script>

<style>
    *{
    margin: 0;
    padding: 0;
    }
    h4, h3{
        text-align: center;
        background-color: #195f56;
        color:#eafffc;
        padding-bottom: 5px;
    }
    .row{
        background-color:  #cfdad8;
        padding : 5px;   
    }
    .col-6, .col-12{
        display: flex;
        align-items: center;
        margin-top: 5px;
        margin-bottom: 5px;
        color: #2f9789;
        padding-left: 30px;   
    }
    img{
        width: 25px;
        display: inline-block;
    }
</style>