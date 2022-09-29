<template>
    <div class="row" id="NavbarShop">
        <div class="col-2" id="menu"><img src="../../assets/images/menu.svg" alt="menu icon"></div>
        <div class="col-10" id="recherche"><input type="search" id="site-search" name="q" placeholder="Votre recherche"></div>
    </div>
</template>

<script>
// import { computed } from '@vue/reactivity'
export default {
    id:"NavbarShop",
    props:{
    
    }
}
</script>

<style lang="scss">
#NavbarShop{
    margin: 0px;
    padding: 0x;
    background-color: #2f9789;
    border-color : #3fc4b2 #3fc4b2 #2b867a #2b867a;
    border-style: solid;
    border-width: 3px;
    #menu{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
            width: 50px;
            margin: 5px;
            padding: 5px;
        }
    }
    #recherche{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        #site-search{
            width: 90%;
            box-shadow: inset 0.08rem 0.08rem #226d63;
            background-color:  #e5f0ee; 
        }
    }
}
</style>