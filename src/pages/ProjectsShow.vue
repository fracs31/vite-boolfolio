<!-- JavaScript -->
<script>
    import axios from "axios"; //importo Axios
    import DefaultLayout from '../layouts/Default.vue'; //importo il layout
    import ProjectCard from "../components/ProjectCard.vue"; //importo "ProjectCard"
    //Esporto
    export default {
        //Componenti
        components: {
            DefaultLayout, //layout
            ProjectCard, //ProjectCard
        },
        //Dati
        data() {
            return {
                projects: [], //progetto
            }
        },
        //Metodi
        methods: {
            //Metodo che restituisce i progetti dallo slug
            fetchProjectsBySlug(slug) {
                //Effettuo la chiamata all'API
                axios.get("http://127.0.0.1:8000/api/projects/" + slug)
                .then((res) => {
                    const results = res.data.results; //salvo i risultati
                    this.projects.push(results); //assegno i risultati ai progetti
                    console.log("Progetto: ", this.projects); //stampo in console i progetti
                })
                .catch((err) => {
                    console.log(err); //stampo gli errori
                });
            },
        },
        //Mounted
        mounted() {
            this.fetchProjectsBySlug(this.$route.params.slug); //chiamata all'API dei progetti
        }
    }
</script>

<!-- Template -->
<template>
    <!-- Layout -->
    <DefaultLayout>
        <!-- Progetti -->
        <ul class="projects">
            <!-- Progetto -->
            <li class="project" v-for="project in projects">
                <!-- Carta -->
                <ProjectCard v-bind:key="project.id" v-bind:project="project"></ProjectCard>
            </li>
        </ul>
    </DefaultLayout>
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