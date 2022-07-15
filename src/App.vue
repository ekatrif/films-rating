<template>
  <div>
    <HeaderComponent title="Что посмотреть в пятницу?" />
    <FilmsTable></FilmsTable>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FilmsTable from "./components/FilmsTable.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FilmsTable,
  },
};
</script>

<style scoped></style>
