import { createWebHistory, createRouter } from "vue-router";
import SignUpIn from "@/components/shop/SignUpIn.vue";
import SubScribe from "@/components/shop/SubScribe.vue";
import SignIn from "@/components/shop/SignIn.vue";
import UserPanel from "@/components/shop/UserPanel.vue";
import CartPage from "@/components/shop/CartPage.vue";
import HomePage from "@/components/shop/HomePage.vue";
import ShopHome from "@/views/ShopHome.vue";
import CmsHome from "@/views/CmsHome.vue";
import ProductsPage from "@/components/shop/ProductsPage.vue";
import CustomerAccountPage from "@/components/shop/CustomerAccountPage.vue";
import UserInfo from "@/components/shop/UserInfo.vue"
import cmsHomePage from "@/components/cmsHomePage.vue"
import DashBoard from "@/components/DashBoard.vue"
import cmsSignUpIn from "@/components/cmsSignUpIn.vue"
// import AjouterProduit from "@/components/AjouterProduit.vue"


const routes = [
    {
        path: "/",
        name: "CmsHome",
        component: CmsHome,
        children:[
            {
                path: "",
                name: "cmsHomePage",
                component: cmsHomePage
            },
            {
                path: "SignUpIn",
                name: "cmsSignUpIn",
                component: cmsSignUpIn
            },
            {
                path: "SubScribe/:fromCms",
                name: "cmsSubScribe",
                component: SubScribe,
                props: true
            },
            {
                path: "SignIn",
                name: "cmsSignIn",
                component: SignIn
            },
            {
                path: "UserPanel",
                name: "cmsUserPanel",
                component: UserPanel
            },
            {
                path: "UserInfo",
                name: "cmsUserInfo",
                component: UserInfo
            },
            {
                path: "CustomerAccountPage",
                name: "cmsCustomerAccountPage",
                component: CustomerAccountPage
            },
            {
                path: "DashBoard",
                name:"DashBoard",
                component:DashBoard
            },
        ]
    },
    {
        path: "/shop",
        name: "ShopHome",
        component: ShopHome,
        children: [
            {
                path:"",
                name: "HomePage",
                component: HomePage
            },
            {
                path: "SignUpIn",
                name: "SignUpIn",
                component: SignUpIn
            },
            {
                path: "SubScribe/:fromCms",
                name: "SubScribe",
                component: SubScribe,
                props: true
            },
            {
                path: "SignIn",
                name: "SignIn",
                component: SignIn
            },
            {
                path: "UserPanel",
                name: "UserPanel",
                component: UserPanel
            },
            {
                path: "UserInfo",
                name: "UserInfo",
                component: UserInfo
            },
            {
                path: "CustomerAccountPage",
                name: "CustomerAccountPage",
                component: CustomerAccountPage
            },
            {
                path: "CartPage",
                name: "CartPage",
                component: CartPage
            },
            {
                path: "ProductsPage",
                name: "ProductsPage",
                component: ProductsPage
            }
        ]
    },
    
    
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
