<template>
    <div class="row" id="NavbarShop">
        <div class="col-2" id="menu"><img src="../assets/menu.svg" alt="menu icon"></div>
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
        justify-content: space-between;
        align-items: center;
        #site-search{
            width: max-content;
        }
    }
}
</style>