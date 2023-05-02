<!-- JavaScript -->
<script>
    import axios from "axios"; //importo Axios
    import ProjectCard from "./ProjectCard.vue"; //importo "ProjectCard"
    //Esporto
    export default {
        //Componenti
        components: {
            ProjectCard, //ProjectCard
        },
        //Dati
        data() {
            return {
                projects: [], //progetti,
                currentPage: 1, //pagina corrente
                links: [], //links
            }
        },
        //Metodi
        methods: {
            //Metodo che restituisce i progetti
            fetchProjects(page) {
                //Effettuo la chiamata all'API
                axios.get("http://127.0.0.1:8000/api/projects", {
                    params: {
                        page: page, //pagina
                    }
                })
                .then((res) => {
                    const results = res.data.results; //salvo i risultati
                    this.projects = results.data; //assegno i risultati ai progetti
                    this.currentPage = results.current_page; //pagina corrente
                    this.links = results.links; //links
                    console.log("Progetti: ", this.projects); //stampo in console i progetti
                    console.log("Pagina corrente: ", this.currentPage); //stampo in console i progetti
                    console.log("Links: ", this.links); //stampo in console i progetti
                })
                .catch((err) => {
                    console.log(err); //stampo gli errori
                });
            },
            //Metodo che restituisce i progetti
            fetchProjectsByUrl(url) {
                //Effettuo la chiamata all'API
                axios.get(url)
                .then((res) => {
                    const results = res.data.results; //salvo i risultati
                    this.projects = results.data; //assegno i risultati ai progetti
                    this.currentPage = results.current_page; //pagina corrente
                    this.links = results.links; //links
                    console.log("Progetti: ", this.projects); //stampo in console i progetti
                    console.log("Pagina corrente: ", this.currentPage); //stampo in console i progetti
                    console.log("Links: ", this.links); //stampo in console i progetti
                })
                .catch((err) => {
                    console.log(err); //stampo gli errori
                });
            },
        },
        //Mounted
        mounted() {
            this.fetchProjects(this.currentPage); //chiamata all'API dei progetti
        }
    }
</script>

<!-- Template -->
<template>
    <!-- Progetti -->
    <ul class="projects">
        <!-- Progetto -->
        <li class="project" v-for="project in projects">
            <!-- Carta -->
            <ProjectCard v-bind:key="project.id" v-bind:project="project"></ProjectCard>
        </li>
    </ul>
    <!-- Links -->
    <ul class="links">
        <!-- Link -->
        <li class="link" v-for="link in links" v-html="link.label" v-on:click="fetchProjectsByUrl(link.url)">
        </li>
    </ul>
</template>

<!-- CSS -->
<style scoped>
    /* Progetti */
    .projects {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    /* Links */
    .links {
        margin-top: 20px;
        display: flex;
        gap: 15px;
    }
    /* Link */
    .link {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 5px;
        cursor: pointer;
    }
</style>