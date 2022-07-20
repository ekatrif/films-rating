<template>
  <div>
    <HeaderComponent title="Что посмотреть в пятницу?" />

    <FilmsTable v-bind:films="sortedFilms"></FilmsTable>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FilmsTable from "./components/FilmsTable.vue";

export default {
  name: "App",
  data() {
    return { films: [] };
  },
  async created() {
    try {
      const response = await this.axios.get("films.json");
      this.films = response.data.films;
    } catch (err) {
      console.log("Ошибка", err);
    }
  },
  //Прослушиваем глобально событие из вложенного компонента
  mounted: function () {
    this.$root.$on(
      "addVoiceToFilm",
      function (data) {
        this.films[data - 1].rating += 1;
      }.bind(this)
    );
  },
  computed: {
    sortedFilms: function () {
      function compare(a, b) {
        if (a.rating > b.rating) return -1;
        if (a.rating < b.rating) return 1;
        return 0;
      }
      if (this.films.length > 0) {
        let filmsArray = this.films.slice(0);
        return filmsArray.sort(compare);
      } else return false;
    },
  },
  components: {
    HeaderComponent,
    FilmsTable,
  },
};
</script>

<style scoped></style>
