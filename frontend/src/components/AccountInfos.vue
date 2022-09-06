<template>
    <div class="row" id="AccountInfos">
        <div class="row">
            <h3>Mon compte</h3>
        </div>
        <div class="row" id="infos">
            <div class="col-6">
                <p>Nom</p></div>
            <div class="col-6">
                <p>Avatar</p>
            </div>
            <div class="col-6">
                <p>Mail</p>
            </div>
            <div class="col-6">
                <p>Mot de passe</p>
            </div>
            <div class="col-6">
                <p>Téléphone</p>
            </div>
            <div class="col-6">
                <p>Adresse</p>
            </div>
        </div>
    </div>
</template>

<script>
// import { computed } from '@vue/reactivity'
export default {
    id:"AccountInfos",
    
}
</script>

<style lang="scss">
#AccountInfos{
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
    #infos{
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
        }
    }
}
</style>