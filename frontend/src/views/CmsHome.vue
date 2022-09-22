<template>
   <HeaderCMS></HeaderCMS>
   <AdminProductsPage></AdminProductsPage>
   <FooterCMS></FooterCMS>
</template>
  
<script>
import FooterCMS from "../components/FooterCMS.vue"
import HeaderCMS from "../components/HeaderCMS.vue";
import AdminProductsPage from "@/components/AdminProductsPage.vue";
    export default {
        name: 'CmsHome',
        components: {
    HeaderCMS,
    FooterCMS,
    AdminProductsPage,
}
    }
</script>
  
<style>
 
</style>
  
  