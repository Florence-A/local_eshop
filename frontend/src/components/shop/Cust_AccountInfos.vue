<template>
    <div class="row" id="Cust_AccountInfos">
        <h2>Mon compte</h2>
        <div class="row" id="infos">
            <div class="col-6">
                <p>Account Name</p>
                <!-- <p>{{dataAccount.name}}</p> -->
            </div> 
            <div class="col-6">
                <p>Account Avatar</p>
                <!-- <p>{{dataAccount.avatar}}</p> -->
            </div>
            <div class="col-6">
                <p>Account Mail</p>
                <!-- <p>{{dataAccount.mail}}</p> -->
            </div>
            <div class="col-6">
                <p>Account Password</p>
                <!-- <p>{{dataAccount.password}}</p> -->
            </div>
            <div class="col-6">
                <p>Account phone</p>
                <!-- <p>{{dataAccount.phone}}</p> -->
            </div>
            <div class="col-6">
                <p>Account adress</p>
                <!-- <p>{{dataAccount.adress}}</p> -->
            </div>
        </div>
    </div>
</template>

<script>
// import { computed } from '@vue/reactivity'
export default {
    id:"Cust_AccountInfos",
    dataAccount: [
        { Id: 1, name: 'Item1', avatar: "Test", mail: "mail@mail.fr", password:"passtest", phone:"020303", adress: "adresse"},
        { Id: 2, name: 'Item2', avatar: "Test", mail: "mail@mail.fr", password:"passtest", phone:"020303", adress: "adresse"},
        { Id: 3, name: 'Item3', avatar: "Test", mail: "mail@mail.fr", password:"passtest", phone:"020303", adress: "adresse"},
        { Id: 4, name: 'Item4', avatar: "Test", mail: "mail@mail.fr", password:"passtest", phone:"020303", adress: "adresse"},
    ],
    // mounted(){
    //     axios.get('http://localhost:9000/ACCOUNTINFOS/')
    //     .then((response)=>{
    //         console.log(response.data)
    //         this.dataAccount = response.data
            
    //     })
    // }
}
</script>
