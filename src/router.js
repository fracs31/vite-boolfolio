import { createRouter, createWebHistory } from "vue-router"; //importo il router e la history

import Portfolio from "./pages/Portfolio.vue"; //importo il portfolio

//Router
const router = createRouter({
    history: createWebHistory(), //history
    //Rotte
    routes: [
        {
            path: "/portfolio", //percorso
            name: "portfolio", //nome
            component: Portfolio //componente
        },
    ]
});

export { router }; //esporto il router