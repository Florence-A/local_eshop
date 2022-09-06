<template>
    <div class="row" id="modifCompte">
        <div class="row">
            <h3>Modifier mon compte</h3>
        </div>
        <div class="row" id="modifInfo">
            <div class="col-6">
                <img src="../assets/reglages.svg" alt="reglage">
                <p>Nom</p></div>
            <div class="col-6">
                <img src="../assets/user.svg" alt="reglage">
                <p>Avatar</p>
            </div>
            <div class="col-6">
                <img src="../assets/mail.svg" alt="reglage">
                <p>Mail</p>
            </div>
            <div class="col-6">
                <img src="../assets/hours.svg" alt="reglage">
                <p>Mot de passe</p>
            </div>
            <div class="col-6">
                <img src="../assets/phone.svg" alt="reglage">
                <p>Téléphone</p>
            </div>
            <div class="col-6">
                <img src="../assets/location.svg" alt="reglage">
                <p>Adresse</p>
            </div>
        </div>
    </div>
</template>

<script>
// import { computed } from '@vue/reactivity'
export default {
    id:"modifCompte",
    
}
</script>

<style lang="scss">
#modifCompte{
    *{
    margin: 0;
    padding: 0;
    }
    h3{
        text-align: center;
        background-color: #195f56;
        color: white;
        padding-bottom: 5px;
    }
    #modifInfo{
        background-color:  #cfdad8;
        padding : 5px;
        .col-6{
            display: flex;
            align-items: center;
            justify-content: left;
            margin-top: 5px;
            margin-bottom: 5px;
            color: #2f9789;
            float: left;
            padding-left: 30px;
            p{
                margin: 0;
                padding: 0;
                padding-left: 5px;
            }
            img{
                width: 25px;
                display: inline-block;
            }
        }
    }
}
</style>