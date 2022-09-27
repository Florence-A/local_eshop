<template>
    <div class="row" id="Cust_AccountModify">
        <h3>Modifier mon compte</h3>
        <div class="row" id="modifyInfo">
            <div class="col-6">
                <img src="../../assets/images/reglages.svg" alt="reglage">
                <p>Nom</p></div>
            <div class="col-6">
                <img src="../../assets/images/user.svg" alt="reglage">
                <p>Avatar</p>
            </div>
            <div class="col-6">
                <img src="../../assets/images/mail.svg" alt="reglage">
                <p>Mail</p>
            </div>
            <div class="col-6">
                <img src="../../assets/images/hours.svg" alt="reglage">
                <p>Mot de passe</p>
            </div>
            <div class="col-6">
                <img src="../../assets/images/phone.svg" alt="reglage">
                <p>Téléphone</p>
            </div>
            <div class="col-6">
                <img src="../../assets/images/location.svg" alt="reglage">
                <p>Adresse</p>
            </div>
            <div class="col-12">
                <button v-on:click="valider();" class="butValid">Valider</button>
            </div>
        </div>
    </div>
</template>

<script>
// import { computed } from '@vue/reactivity'
export default {
    id:"Cust_AccountModify",
    dataAccount : [],
    methods: {
        valider(){
            // Update des infos du compte client
        }
    },
    // mounted(){
    //     axios.get('http://localhost:9000/INFOSCOMPTE/')
    //     .then((response)=>{
    //         console.log(response.data)
    //         this.dataAccount = response.data
            
    //     })
    // }
    
}
</script>

<style lang="scss">
</style>