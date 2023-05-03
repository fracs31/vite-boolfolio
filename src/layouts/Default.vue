<!-- JavaScript -->
<script>
    import AppHeader from "../components/AppHeader.vue"; //importo l'header
    //Esporto
    export default {
        //Componenti
        components: {
            AppHeader, //header
        }
    }
</script>

<!-- Template -->
<template>
    <!-- Header -->
    <AppHeader></AppHeader>
    <!-- Slot -->
    <slot></slot>
</template>

<!-- CSS -->
<style scoped>
</style>