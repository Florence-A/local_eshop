import { createWebHistory, createRouter } from "vue-router";
import signUpIn from "@/components/signUpIn.vue"
import subScribe from "@/components/subScribe.vue"
import signIn from "@/components/signIn.vue"


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

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
