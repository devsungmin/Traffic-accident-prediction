import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Main"
import ImageUpload from "../views/ImageUpload"
import CheckTrafficAccident from "../views/CheckTrafficAccident"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/upload",
        component: ImageUpload
    },
    {
        path: "/check",
        component: CheckTrafficAccident
    }

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;