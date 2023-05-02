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
                projects: [], //progetti
            }
        },
        //Metodi
        methods: {
            //Metodo che restituisce i progetti
            fetchProjects() {
                //Effettuo la chiamata all'API
                axios.get("http://127.0.0.1:8000/api/projects")
                .then((res) => {
                    const results = res.data.results; //salvo i risultati
                    this.projects = results; //assegno i risultati ai progetti
                    console.log(this.projects); //stampo in console i progetti
                })
                .catch((err) => {
                    console.log(err); //stampo gli errori
                });
            },
        },
        //Mounted
        mounted() {
            this.fetchProjects(); //chiamata all'API dei progetti
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
</template>

<!-- CSS -->
<style scoped>
    /* Progetti */
    .projects {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>