import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/website/HomeView.vue";
import MotorBikeView from "../views/website/MotorBikeView.vue";
import AboutView from "../views/website/AboutView.vue";
import ContactView from "../views/website/ContactView.vue";
import ProductView from "../views/website/ProductView.vue";
import StoreView from "../views/website/StoreView.vue";
import MotorBikeFixView from "../views/website/MotorBikeFixView.vue";
import SiteHeader from "../components/website/_shared/TheHeader.vue";
import SiteFooter from "../components/website/_shared/TheFooter.vue";
import NotFoundComponent from "../views/NotFoundComponent.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

        {
            path: "/",
            name: "home",
            components: {
                default: HomeView,
                header: SiteHeader,
                footer: SiteFooter,
            },
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: "/motorizadas",
            name: "motorBike",
            components: {
                default: MotorBikeView,
                header: SiteHeader,
                footer: SiteFooter,
            },
            meta: {
                requiresAuth: false,
            },
        },

        {
            path: "/conserto-motorizadas",
            name: "motorBikeFix",
            components: {
                default: MotorBikeFixView,
                header: SiteHeader,
                footer: SiteFooter,
            },
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: "/loja",
            name: "store",
            components: {
                default: StoreView,
                header: SiteHeader,
                footer: SiteFooter,
            },
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: "/produto/:id",
            name: "product",
            components: {
                default: ProductView,
                header: SiteHeader,
                footer: SiteFooter,
            },
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: "/quem-somos",
            name: "about",
            components: {
                default: AboutView,
                header: SiteHeader,
                footer: SiteFooter,
            },
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: "/contato",
            name: "contact",
            components: {
                default: ContactView,
                header: SiteHeader,
                footer: SiteFooter,
            },
            meta: {
                requiresAuth: false,
            },
        },

        /*
        *** Rotas para dashboard administrativo
        */

        {
            path: "/404",
            name: "notFound",
            component: NotFoundComponent,
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: "/:catchAll(.*)",
            redirect: "/404"
        },
    ]
});

export default router;
