<template>
  <div>
    <HeaderComponent title="Что посмотреть в пятницу?" />
    <FilmsTable v-bind:films="films"></FilmsTable>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FilmsTable from "./components/FilmsTable.vue";

export default {
  name: "App",
  data() {
    return {
      films: [
        {
          id: 1,
          titleRus: "Месть Банши",
        },
        { id: 2, titleRus: "Девушка с татуировкой дракона" },
      ],
    };
  },

  components: {
    HeaderComponent,
    FilmsTable,
  },
};
</script>

<style scoped></style>
