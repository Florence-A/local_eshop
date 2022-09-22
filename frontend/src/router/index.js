import { createWebHistory, createRouter } from "vue-router";
import SignUpIn from "@/components/shop/SignUpIn.vue";
import SubScribe from "@/components/shop/SubScribe.vue";
import SignIn from "@/components/shop/SignIn.vue";
import UserPanel from "@/components/shop/UserPanel.vue";
import UserInfo from "@/components/shop/UserInfo.vue";
import CartPage from "@/components/shop/CartPage.vue";
import HomePage from "@/components/shop/HomePage.vue";
import FavoriteItems from "@/components/shop/FavoriteItems.vue";
import ShopHome from "@/views/ShopHome.vue";
import CmsHome from "@/views/CmsHome.vue";

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
                path: "FavoriteItems",
                name: "FavoriteItems",
                component: FavoriteItems
            },
            {
                path: "CartPage",
                name: "CartPage",
                component: CartPage

            }
        ]
    },
    
    
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
