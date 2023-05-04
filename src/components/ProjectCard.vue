<!-- JavaScript -->
<script>
  //Esporto
  export default {
    //Props
    props: {
      //Progetto
      project: {
        type: Object,
        required: true
      },
    }
  }
</script>

<!-- Template -->
<template>
  <!-- Carta -->
  <div class="card">
    <!-- Testa -->
    <div class="card__head">
      <!-- Titolo -->
      <h2 class="title">
        {{ project.title }}
      </h2>
      <!-- Slug -->
      <h3 class="slug">
        {{ project.slug }}
      </h3>
      <!-- Cliente -->
      <h4 class="client">
        {{ project.client }}
      </h4>
    </div>
    <!-- Corpo -->
    <div class="card__body">
      <!-- Descrizione -->
      <p class="description">
        {{ project.description }}
      </p>
    </div>
    <!-- Piede -->
    <div class="card__footer">
      <!-- Tipo -->
      <h5 class="type">
        {{ project.type.name }}
      </h5>
      <!-- Tecnologie -->
      <ul class="technologies">
        <!-- Tecnologia -->
        <li class="technology" v-for="technology in project.technologies">
          {{ technology.name }}
        </li>
      </ul>
      <!-- Router Link -->
      <router-link :to="{ name: 'projects.show', params: { slug: project.slug } }">
        Vedi il progetto
      </router-link>
    </div>
  </div>
</template>

<!-- CSS -->
<style scoped>
/* Carta */
  .card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 10px;
  }
  /* Tipo */
  .type {
    font-weight: normal;
    font-size: 14px;
  }
</style>