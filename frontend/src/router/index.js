import { createWebHistory, createRouter } from "vue-router";
import SignUpIn from "@/components/SignUpIn.vue";
import SubScribe from "@/components/SubScribe.vue";
import SignIn from "@/components/SignIn.vue";
import UserPanel from "@/components/UserPanel.vue";
import UserInfo from "@/components/UserInfo.vue";
import CartPage from "@/components/CartPage.vue";
import HomePage from "@/components/HomePage.vue";
import FavoriteItems from "@/components/FavoriteItems.vue";
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

            },
        ]
    },
    
    
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
