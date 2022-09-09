<template>
    <div id="PracticalInfos">
        <div id="titrePratique"><h1>Informations pratiques</h1></div>
        <div class="info" id="horaires">
            <div class="titre">
                <img src="../assets/hours.svg" alt="horaires">
                <h3>Horaires</h3>
            </div>
            <div class="texte">
                <a>De 9h à 12 h et de 13h à 19h. 
                <br> Tous les jours, sauf lundis et jours fériés.</a>
            </div>
        </div>

        <div class="info" id="adresse">
            <div class="titre">
                <img src="../assets/location.svg" alt="location">
                <h3>Adresse</h3>
            </div>
            <div class="texte">
                <a>28, rue Tolstoi, 29200 BREST</a>
            </div>
        </div>

        <div class="info" id="phone">
            <div class="titre">
                <img src="../assets/phone.svg" alt="phone">
                <h3>Téléphone</h3>
            </div>
            <div class="texte">
                <a>06 06 07 08 09 (port.)</a>
                <br><a>02 06 07 08 09 (fixe)</a>
            </div>
        </div>

        <div class="info" id="mail">
            <div class="titre">
                <img src="../assets/mail.svg" alt="mail">
                <h3>Email</h3>
            </div>
            <div class="texte">
                <a>monmail@gmail.com</a>
            </div>
        </div>
    </div>
</template>

<script>
// import { computed } from '@vue/reactivity'
export default {
    id:"PracticalInfos",
    props:{
    
    }
}
</script>

<style lang="scss">
    #PracticalInfos{
        *{
            margin: 0;
            padding: 0;
        }
        background-color : #cfdad8;
        #titrePratique {
            background-color: #195f56;
            text-align: center;
            color: white;
            padding-bottom: 3px;
        }
        .info{
            padding : 5px;
            .titre{
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 5px;
                margin-bottom: 5px;
                color: #2f9789;
                img{
                    width: 20px;
                    display: inline-block;
                }
                h3{
                    text-align: center;
                    margin: 0;
                    margin-left: 10px;
                }
            } 
            .texte{
                text-align: center;
            }
        }
    }
</style>