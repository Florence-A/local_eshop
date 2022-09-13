<template>
    <div class="CustomerAccountPage">
        <HeaderShop></HeaderShop>
        <NavbarShop></NavbarShop>
        <AccountInfos></AccountInfos>
        <AccountModify></AccountModify>
        <PendingOrders></PendingOrders>
        <DeliveredOrders></DeliveredOrders>
        <FooterShop></FooterShop>
    </div>
</template>

<script>
// IMPORTS
// import bdd from '../bdd'
// import { onMounted, ref, watch } from 'vue' //destructuration

// COMPONENTS
import HeaderShop from './HeaderShop.vue'
import NavbarShop from './NavbarShop.vue'
import AccountInfos from './AccountInfos.vue'
import AccountModify from './AccountModify.vue'
import PendingOrders from './PendingOrders.vue'
import DeliveredOrders from './DeliveredOrders.vue'
import FooterShop from './FooterShop.vue'

export default {
    name: 'CustomerAccountPage',
    components:{
        HeaderShop,
        NavbarShop,
        AccountInfos,
        AccountModify,
        PendingOrders,
        DeliveredOrders,
        FooterShop
    },
}
</script>
<style>
    
</style>