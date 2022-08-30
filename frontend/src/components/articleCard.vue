<template>
    <div class="row" id="articleCard">
        <div class="col-12" id="articleImage">
            <img class="img-fluid" src="/assets/produit2.png" alt=""><!-- {{ info_article.image }} -->
        </div>
        <div class="col-12" id="articleInformations">
            <div class="infos">
                <h2 id="name">
                    Nom article  <!-- {{ info_article.name }}infos dynamiques. Props permet de passer infos d'un composant parent à un compo enfant -->
                </h2>
                <p id="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis iste at quo voluptatum incidunt voluptatibus. Incidunt maiores error consequuntur numquam? <!-- {{ info_article.name }} -->
                </p>
                <div class="row" id="infoproduits">
                    <div class="col-4" id="blocprix">
                        <p id="prix">
                            Prix article € <!-- {{ info_article.name }} -->
                        </p>
                    </div>
                    <div class="col-4" id="blocqtity">
                        <p id="qtity">
                            <button v-on:click="increment();">Qtité</button><!-- {{ count }} -->
                        </p>
                    </div>
                    <div class="col-4" id="blocachat">
                        <p id="achat">
                            <button v-on:click="achat();" class="butAchat">Acheter</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>   
</template>

<script>
// import { computed } from '@vue/reactivity'
export default {
    name:"articleCard",
    // props:{
    //     info_article: Object
    // },
    // data(){
    //     return{
    //         this.count
    //     }
    // }
    // setup(props){
    //     const changeBackground = computed(() => {
    //         return {
    //             backgroundImage: `url(${props.info_article.image})`
    //         }
    //     })

    //     // RETURN
    //     return {
    //         changeBackground,
    //     }
    // },
    // methods: {
    //     increment(){
    //         this.count++
    //         // fonction Increment A COMPLETER 
    //         // - doit y avoir boutons + et -
    //         // - doit modifier prix en fonction
    //     },
    //     achat(){
    //         // fonction Achat A COMPLETER
    //         // click => ajouter produit à liste produit du client
    //     }
    // }
}
</script>

<style lang="scss">
#articleCard{
    p{
    margin: 0;
    padding: 0;
    align-content: center;
    }
    #articleImage{
        img{
            height: fit-content;
        }
    }
    #articleInformations{
        .infos{
            h2{
                text-align: center;
                background-color: #195f56;
                color: white;
                padding-bottom: 5px;
            }
            #infoproduits{
                position: relative;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: white;
                padding-top: 5px;
                .col-4{
                    align-content: center;
                    button{
                        background-color: #2f9789;
                        color: white;
                        border-radius: 10px;
                        padding: 5px;
                        border-color: #2f9789;
                        border-width: 2px;
                    }
                }
            }    
        }
    }
}
</style>