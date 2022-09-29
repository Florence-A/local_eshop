
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
  
<style>
    #ShopHome {
        height:100%;
        background-color:#cfdad8;
    }
    *{
            margin: 0;
            padding: 0;
    }
    h1, h2{
        text-align: center;
        margin-top: 5px;
        margin-bottom: 5px;
        background-color: #195f56;
        color: white;
    }
    h3, h4, h5{
        text-align: center;
        margin-top: 5px;
        margin-bottom: 5px;
        padding-left: 0;
        padding-right: 0;
        background-color: #2f9789;
        color: white;
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
    }
    .input_qte{
        max-width: 50px;
        text-align: center;
    }
</style>
  
  