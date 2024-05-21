import Vue from "vue";
import VueRouter from "vue-router";
import Store from "../components/StoreComponent";
import ShoppingCart from "../components/ShoppingCart.vue";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Store },
        { path: "/dupa", component: Store },
        { path : "/cart", component: ShoppingCart },
        { path: "*", redirect: "/" },
    ]
})