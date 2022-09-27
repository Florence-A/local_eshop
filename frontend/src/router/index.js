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

const routes = [
    {
        path: "/",
        name: CmsHome,
        component: CmsHome
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
                component: SubScribe
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
