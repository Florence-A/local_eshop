<template>
    <div  class="FavoriteItem">
        <div :style="changeBackground" class="articleImage">
            <!-- {{ info_article.image }} -->
        </div>
        <div class="articleInformations">
            <div class="top">
                <h2 class="name">
                    Titre
                    <!-- {{ info_article.name }}   infos dynamiques. Props permet de passer infos d'un composant parent à un compo enfant -->
                </h2>
                <p class="prix">
                    <span>Prix</span>
                    <!-- <span>{{ info_article.prix }}</span> -->
                </p>
                <p class="qtity">
                    <span>Quantité</span>
                    <!-- <span>{{ info_article.qtity }}</span> -->
                </p>
                <button class="achat">Acheter</button>
            </div>
        </div>
    </div>
</template>

<script>
// import { computed } from '@vue/reactivity'
export default {
    name:"FavoriteItem",
    props:{
        info_article: Object
    },
    
}
</script>

<style lang="scss">
.article--card{
    width: 32%;
    height: 30vh;

    p{
        margin: 0px;
    }
    .article--image{
        background-image: url('https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zNzg4MDJiMC1jNTI4LTQ4MjktYjBiNS0wY2M2NDBkZjYzY2QuanBlZw==');
        height: 70%;
        background-size: cover;
        background-position: center;
    }
    .article--informations
    {
        .top{
            margin: 10px 0px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .note{
                background-color: #eeeeee;
                height: 30px;
                width: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 0.8rem;
                border-radius: 50%;
            }
            }
        .time{
            font-size: 0.9;   
        }
    }    
        

}
</style>