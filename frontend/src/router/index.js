import { createWebHistory, createRouter } from "vue-router";
import signUpIn from "@/components/signUpIn.vue";
import subScribe from "@/components/subScribe.vue";
import signIn from "@/components/signIn.vue";
import userPanel from "@/components/userPanel.vue";
import userInfo from "@/components/userInfo.vue";


const routes = [
    {
        path: "/signUpIn",
        name: "signUpIn",
        component: signUpIn
    },
    {
        path: "/subScribe",
        name: "subScribe",
        component: subScribe
    },
    {
        path: "/signIn",
        name: "signIn",
        component: signIn
    },
    {
        path: "/userPanel",
        name: "userPanel",
        component: userPanel
    },
    {
        path: "/userInfo",
        name: "userInfo",
        component: userInfo
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
