<template>
    <div id="infoBoutique">
        <div class="row" id="titreBoutique"><h1>Infos Boutique</h1></div>
        <div class="row" id="blocTexteBoutique">
            <div class="col-12"><img class="img-fluid" src="../assets/photoBoutique.jpg" ></div>
            <div class="col-12" id="texteBoutique"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis enim deleniti quod possimus nisi sequi nam facilis fugiat alias dolore.</p></div>
        </div>
    </div>
</template>

<script>
// import { computed } from '@vue/reactivity'
export default {
    id:"infoBoutique",
    props:{
    
    }
}
</script>

<style lang="scss">
    #infoBoutique{
        *{
            margin: 0;
            padding: 0;
        }
        #titreBoutique{
            background-color: #195f56;
            h1{
                text-align: center;
                color: white;
                margin: 0;
                padding: 0;
            }
        }
        #blocTexteBoutique{
            background-color: #cfdad8;
            img{
                width: 294px;
            }
            #texteBoutique{
                p{
                    text-align: justify;
                    padding: 5px;
                }
            }
        }
    }
</style>