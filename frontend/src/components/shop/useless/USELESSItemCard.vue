<!-- <template>
    <div class="row" id="ItemCard">
        <div class="col-12" id="ItemInformations">
            <div class="infos">
                <h2 id="name">
                    Nom article  
                    {{ dataItem._ref }}
                    
                </h2>
                <div class="col-12" id="ItemImage">
                    <img class="img-fluid" src={{dataItem.image}} alt="">
                </div>
                <p id="description">
                    {{ dataItem.description }}
                    
                </p>
                <div class="row" id="infoproduits">
                    <div class="col-4" id="blocprix">
                        <p id="prix">
                          
                            {{ dataItem.HT_price }}
                        </p>
                    </div>
                    <div class="col-4" id="blocqtity">
                        <div class="quantity-toggle">
                            <button @click="decrement()">&mdash;</button>
                            <input type="text" :value="quantity" readonly>
                            <button @click="increment()">&#xff0b;</button>
                        </div>
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
import axios from 'axios'
export default {
    name:"ItemCard",
    data(){
        return {
            quantity: 1,
            dataItem: {}
        }
    },
    methods: {
        increment () {
            this.quantity++
        },
        decrement () {
            if(this.quantity === 1) {
                alert('Quantité négative non autorisée')
            } else {
                this.quantity--
            }
        },
        achat(){
            fonction Achat A COMPLETER
            click => ajouter produit à liste produit du client en fonction de qtity
        }
    },
    mounted(){
        axios.get('http://localhost:9000/product/:id')
        .then((response)=>{
            console.log(response.data)
            this.dataItem = response.data
            
        })
    }
}
</script>

<style lang="scss">
button{
    background-color: #2f9789;
    color: white;
    border-radius: 10px;
    padding: 5px;
    border-color: #2f9789;
    border-width: 2px;
}
                    
#ItemCard{
    p{
    margin: 0;
    padding: 0;
    align-content: center;
    }
    #ItemImage{
        img{
            height: fit-content;
        }
    }
    #ItemInformations{
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
                    .quantity-toggle{
                        input{
                            width: 50px;
                            text-align: center;
                        }
                        
                    }
                    
                }
            }    
        }
    }
}
</style> -->