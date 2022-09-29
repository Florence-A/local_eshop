import { createWebHistory, createRouter } from "vue-router";
import SignUpIn from "@/components/SignUpIn.vue";
import SubScribe from "@/components/SubScribe.vue";
import SignIn from "@/components/SignIn.vue";
import UserPanel from "@/components/UserPanel.vue";
import CartPage from "@/components/shop/CartPage.vue";
import HomePage from "@/components/shop/HomePage.vue";
import ShopHome from "@/views/ShopHome.vue";
import CmsHome from "@/views/CmsHome.vue";
import ProductsPage from "@/components/shop/ProductsPage.vue";
import CustomerAccountPage from "@/components/shop/CustomerAccountPage.vue";
import UserInfo from "@/components/UserInfo.vue"
import cmsHomePage from "@/components/cms/cmsHomePage.vue"
import DashBoard from "@/components/cms/DashBoard.vue"
import cmsSignUpIn from "@/components/cmsSignUpIn.vue"
import UserUpdate from "@/components/UserUpdate.vue"


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
                path: "SubScribe",
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
                path: "SubScribe",
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
                path: "UserUpdate",
                name: "UserUpdate",
                component: UserUpdate
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
