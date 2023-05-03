import { createRouter, createWebHistory } from "vue-router"; //importo il router e la history

import Home from "./pages/Home.vue"; //importo la pagina home
import Portfolio from "./pages/Portfolio.vue"; //importo il portfolio
import AboutMe from "./pages/AboutMe.vue"; //importo la pagina about me

//Router
const router = createRouter({
    history: createWebHistory(), //history
    //Rotte
    routes: [
        {
            path: "/", //percorso
            name: "home", //nome
            component: Home //componente
        },
        {
            path: "/portfolio", //percorso
            name: "portfolio", //nome
            component: Portfolio //componente
        },
        {
            path: "/about-me", //percorso
            name: "about-me", //nome
            component: AboutMe //componente
        },
    ]
});

export { router }; //esporto il router