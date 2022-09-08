import { createWebHistory, createRouter } from "vue-router";
import SignUpIn from "@/components/SignUpIn.vue";
import SubScribe from "@/components/SubScribe.vue";
import SignIn from "@/components/SignIn.vue";
import UserPanel from "@/components/UserPanel.vue";
import UserInfo from "@/components/UserInfo.vue";
import HomePage from "@/components/HomePage.vue";
import FavoriteItems from "@/components/FavoriteItems.vue";
import CartPage from "@/components/CartPage.vue";


const routes = [
    {
        path: "/SignUpIn",
        name: "SignUpIn",
        component: SignUpIn
    },
    {
        path: "/SubScribe",
        name: "SubScribe",
        component: SubScribe
    },
    {
        path: "/SignIn",
        name: "SignIn",
        component: SignIn
    },
    {
        path: "/UserPanel",
        name: "UserPanel",
        component: UserPanel
    },
    {
        path: "/UserInfo",
        name: "UserInfo",
        component: UserInfo
    },
    {
        path: "/",
        name: "HomePage",
        component: HomePage
    },
    {
        path: "/FavoriteItems",
        name: "FavoriteItems",
        component: FavoriteItems
    },
    {
        path: "/CartPage",
        name: "CartPage",
        component: CartPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
