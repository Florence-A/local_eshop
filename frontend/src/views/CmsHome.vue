<template>
    <div id="CmsHome">
        <HeaderCMS></HeaderCMS>
        <AdminProductsPage></AdminProductsPage>
        <FooterCMS></FooterCMS>
   </div>
</template>
  
<script>
import FooterCMS from "../components/FooterCMS.vue"
import HeaderCMS from "../components/HeaderCMS.vue";
import AdminProductsPage from "../components/AdminProductsPage.vue";
    export default {
        name: 'CmsHome',
        components: {
    HeaderCMS,
    FooterCMS,
    AdminProductsPage,
}
    }
</script>
  
<style lang="scss">
#CmsHome{
    a{
            color: white;
            text-decoration: none;
            margin : 5px;
            padding : 5px;}
            a:hover{
            color: #706b3b;
        }
    h1, h2{
        text-align: center;
        margin-top: 5px;
        margin-bottom: 5px;
        background-color: #3f3c21;
        color: white;
    }
    h3, h4, h5{
        text-align: center;
        margin-top: 5px;
        margin-bottom: 5px;
        padding-left: 0;
        padding-right: 0;
        background-color: #706b3b;
        color: white;
    }
    a:hover{
        color: #706b3b;}
    #FooterCMS{
        background-color: #706b3b
    }
    #liens{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // background-color: #9b9454;
        }
    #mentions{
        background-color: #706b3b;
        color: white;
        text-align: center;
        padding-top: 5px;
    }
    #HeaderCMS{
        background-color: #9b9454; 
        #logo{
        position: relative;
        img{
            width: 50px;
            margin: 5px;
            padding: 5px;
        }
    }
    #menu{
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;
        #user{
            img{
                width: 30px;
                height: 30px;
                margin: 10px;
                padding: 5px;

            }
        }
        #favorite{

            img{
                width: 30px;
                margin: 10px;
                padding: 5px;
            }
        }
        #cart{

            img{
                width: 30px;
                margin: 10px;
                padding: 5px;
            }
        }
    }
}
}
    
</style>
  
  