<!-- JavaScript -->
<script>
    import AppHeader from "../components/AppHeader.vue"; //importo l'header
    import AppMain from "../components/AppMain.vue"; //importo il main
    //Esporto
    export default {
        //Componenti
        components: {
            AppHeader, //header
            AppMain, //main
        }
    }
</script>

<!-- Template -->
<template>
    <!-- Header -->
    <AppHeader></AppHeader>
    <!-- Main -->
    <AppMain>
        <!-- Slot -->
        <slot></slot>
    </AppMain>
</template>

<!-- CSS -->
<style scoped>
</style>