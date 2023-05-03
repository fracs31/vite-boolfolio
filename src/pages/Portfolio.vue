<!-- JavaScript -->
<script>
    import DefaultLayout from '../layouts/Default.vue'; //importo il layout
    import Projects from '../components/Projects.vue'; //importo i progetti
    //Esporto
    export default {
        //Componenti
        components: {
            DefaultLayout, //layout
            Projects, //progetti
        }
    }
</script>

<!-- Template -->
<template>
    <!-- Layout -->
    <DefaultLayout>
        <!-- Titolo -->
        <h1 class="title">Portfolio</h1>
        <!-- Progetti -->
        <Projects></Projects>
    </DefaultLayout>
</template>

<!-- CSS -->
<style scoped>
    /* Titolo */
    .title {
        margin-bottom: 15px;
    }
</style>