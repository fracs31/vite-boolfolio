<!-- JavaScript -->
<script>
  import Default from "./layouts/Default.vue"; //importo il layout
  import Projects from "./components/Projects.vue"; //importo "Projects"
  //Esporto
  export default {
    //Componenti
    components: {
      Default, //layout
      Projects, //Projects
    }
  }
</script>

<!-- Template -->
<template>
  <!-- Layout -->
  <Default>
    <!-- Main -->
    <main class="main-content">
      <!-- Container -->
      <div class="container">
        <!-- Titolo -->
        <h1 class="title">
          Progetti
        </h1>
        <!-- Progetti -->
        <Projects></Projects>
      </div>
    </main>    
  </Default>
</template>

<!-- CSS -->
<style scoped>
  /* Main */
  .main-content {
    padding: 50px 0px;
  }
  /* Titolo */
  .title {
    margin-bottom: 25px;
  }
</style>