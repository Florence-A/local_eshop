<template>
    <div class="CustomerAccountPage">
        <Cust_AccountInfos></Cust_AccountInfos>
        <Cust_AccountModify></Cust_AccountModify>
        <Cust_PendingOrders></Cust_PendingOrders>
        <Cart_DeliveredOrders></Cart_DeliveredOrders>
    </div>
</template>

<script>
// IMPORTS
// import bdd from '../bdd'
// import { onMounted, ref, watch } from 'vue' //destructuration

// COMPONENTS
import Cust_AccountInfos from './Cust_AccountInfos.vue'
import Cust_AccountModify from './Cust_AccountModify.vue'
import Cust_PendingOrders from './Cust_PendingOrders.vue'
import Cart_DeliveredOrders from './Cart_DeliveredOrders.vue'

export default {
    name: 'CustomerAccountPage',
    components:{
        Cust_AccountInfos,
        Cust_AccountModify,
        Cust_PendingOrders,
        Cart_DeliveredOrders,
    },
}
</script>
<style lang="scss">
    
    

</style>