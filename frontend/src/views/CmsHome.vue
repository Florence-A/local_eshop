<template>
    <div id="CmsHome">
        <HeaderCMS></HeaderCMS>
        <router-view></router-view>
        <FooterCMS></FooterCMS>
   </div>
</template>
  
<script>
    import FooterCMS from "../components/cms/FooterCMS.vue"
    import HeaderCMS from "../components/cms/HeaderCMS.vue";
    
    export default {
        name: 'CmsHome',
        components: {
            HeaderCMS,
            FooterCMS,
        }
    }
</script>
  
<style lang="scss">
#CmsHome{
    a{
        color: white;
        text-decoration: none;
        margin : 5px;
        padding : 5px;
    }
    a:hover
    {
        color: #706b3b;
    }
    #FooterCMS{
        background-color: #706b3b
    }
    #liens{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
    }
    #menu{
        // position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
}
</style>
