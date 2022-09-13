<template>
    <div id="AssoInfos">
        <div class="row" id="titreAsso"><h1>Infos Asso</h1></div>
        <div class="row" id="blocTexteAsso">
            <div class="col-12" id="imageAsso"><img class="img-fluid" src="../../assets/images/photoAsso.jpg" ></div>
            <div class="col-12" id="texteAsso"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis enim deleniti quod possimus nisi sequi nam facilis fugiat alias dolore.</p></div>
        </div>
    </div>
</template>

<script>
// import { computed } from '@vue/reactivity'
export default {
    id:"AssoInfos",
    props:{
    
    }
}
</script>

<style lang="scss">
    #AssoInfos{
        *{
            margin: 0;
            padding: 0;
        }
        #titreAsso{
            background-color: #195f56;
            h1{
                text-align: center;
                color: white;
            }
        }
        #blocTexteAsso{
            background-color: #cfdad8;
            #imageAsso{
                img{
                    width: 300px;
                }
            }
            #texteAsso{
                text-align: justify;
                padding: 5px;
            }
        }
    }
</style>