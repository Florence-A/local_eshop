<template>
    <div id="CmsHome">
        <HeaderCMS></HeaderCMS>
        <router-view></router-view>
        <FooterCMS></FooterCMS>
   </div>
</template>
  
<script>
    import FooterCMS from "../components/FooterCMS.vue"
    import HeaderCMS from "../components/HeaderCMS.vue";
    
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
    *{
    margin: 0;
    padding: 0;
    } 
    img{
        width: 25px;
        display: inline-block;
    }
    svg{
    fill: #706b3c;
    width: 20px;
    height: 20px;
    }
    button{
        background-color: #706b3b;
        border-radius: 5px;
        color: white;
        margin-bottom: 2px;
        padding-right: 5px;
        padding-left: 5px;
        margin-top: 5px ;
        margin-bottom: 5px ;
        align-items: center;
        border: none;
        border-radius: 8px;
        border-color : #8d874e #8d874e #57522c #57522c;
        border-style: solid;
        border-width: 3px;
        box-shadow: 2px 2px 2px #3d3a1e;
    }
    p{
        color:  #3b3817;
        padding: 5px;
    }
    a{
        color: white;
        text-decoration: none;
        margin : 5px;
        padding : 5px;}
    a:hover{
        color: #e2ddac;
    }
    .row{
        padding : 5px;
        background-color: #e2ddac;  
    }
    div#liens.row, #FooterCMS, #mentions{
        background-color: #706b3b;
        color: white;
        text-align: center;
        padding-top: 5px;
    }
    div#FooterCMS div#mentions.row p{
        color : white;
    }
    .col-6, .col-12{
        display: flex;
        align-items: center;
        margin-top: 5px;
        margin-bottom: 5px;
        padding-left: 30px; 
    }
    .UserInfo, .UserPanel, .wrapper {
        background-color: #e2ddac;
        padding         : 40px 20px 20px 20px;
    }
    #liens{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        }
    div{
        h1, h2, h3, h4, h5{
        text-align: center;
        margin-top: 5px;
        margin-bottom: 0px;
        background-color: #4e4a20;
        color: white;
        border-radius: 0px 0px 8px 8px;
        border-color : #6b662e #6b662e #3b3817  #3b3817;
        border-style: solid;
        border-width: 3px;
        box-shadow: 0px 3px 0px #312f13;}
        h3, h4, h5 {
            background-color: #706b3b;
            border-color : #8f884e #8f884e #4e4b2a  #4e4b2a;
        }
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
        display: flex;
        justify-content: space-around;
        align-items: center;
        }
    }
    }
</style>
