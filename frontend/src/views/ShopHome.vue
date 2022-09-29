
<template>
    <div id="ShopHome">
        <HeaderShop></HeaderShop>
        <NavbarShop></NavbarShop>
        <router-view></router-view>
        <FooterShop></FooterShop>
    </div>
   
</template>
  
<script>
    import HeaderShop from "../components/shop/HeaderShop.vue";
    import NavbarShop from "../components/shop/NavbarShop.vue";
    import FooterShop from "../components/shop/FooterShop.vue";
  
    export default {
        name: 'ShopHome',
        components: {
            HeaderShop,
            NavbarShop,
            FooterShop
        }
  }
</script>
  
<style lang="scss">
// #ShopHome{
    *{
            margin: 0;
            padding: 0;
    }
    #HeaderShop #menu{
        border-color : #3fc4b2 #3fc4b2 #2b867a #2b867a;
        border-style: solid;
        border-width: 3px;
    }
    h1, h2{
        text-align: center;
        margin-top: 5px;
        margin-bottom: 0px;
        background-color: #195f56;
        color: white;
        border-radius: 0px 0px 8px 8px;
        border-color : #26887b #144d45 #144d45 #26887b;
        border-style: solid;
        border-width: 3px;
        box-shadow: 0px 3px 0px #0f3a34;
    }
    div{
        width: 100%;
    }
    .row{
        padding: 0;
        margin: 0;
        --bs-gutter-x : 0;
        --bs-gutter-Y : 0;
        background-color:  #cfdad8; 
    }
    h3, h4, h5{
        text-align: center;
        margin-top: 5px;
        margin-bottom: 5px;
        width: 100%;
        background-color: #40b8a8;
        color: white;
        border-radius: 8px;
        border-color : #4dd4c2 #319285 #319285 #4dd4c2;
        border-style: solid;
        border-width: 3px;
        box-shadow: 0px 3px 0px #267268;
    }
    p{
        text-align: center;
        padding-bottom: 5px;
        padding-top: 5px ;
    }
    .img-fluid {
        width: auto;
    }
    .icon{
        width: 30px;
        margin: 5px ;
    }
    a{
        text-align: center;
    }
    .col-6, .col-12{
        display: flex;
        align-items: center;
        margin-top: 5px;
        margin-bottom: 5px;
        color: #2f9789;
        padding-left: 30px;   
    }
    .col-3{
        display: inline-block;
    }
    button{
        background-color: #2f9789;
        color: white;
        border-radius: 5px;
        padding-right: 5px;
        padding-left: 5px;
        margin-top: 5px ;
        margin-bottom: 5px ;
        align-items: center;
        border: none;
        border-radius: 8px;
        border-color : #3eb9a9 #267a6f #267a6f #3eb9a9;
        border-style: solid;
        border-width: 3px;
        box-shadow: 2px 2px 2px #144d45;
    }
    input.qtity{
        max-width: 50px;
        text-align: center;
    }
// } 

</style>
  
  