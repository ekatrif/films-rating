<template>
  <div>
    <HeaderComponent v-on:dayChanged="updateDate" v-bind:dayName="dayName" v-bind:dayNumber="dayNumber" title="Что посмотреть в пятницу?" />
    <WinnerFilm v-if="dayNumber === 5"></WinnerFilm>
    <FilmsTable v-bind:films="sortedFilms"></FilmsTable>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FilmsTable from "./components/FilmsTable.vue";
import WinnerFilm from "./components/WinnerFilm.vue";

export default {
  name: "App",
  data() {
    return { films: [], dayNumber: 1, dayName: "18 июля, понедельник", filmsNumber: 16 }; //Первый день голосования - понедельник
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

  methods: {
    //Обновляем дату и день недели
    updateDate: function () {
      this.dayNumber++;
      const days = ["18 июля, понедельник", "19 июля, вторник", "20 июля, среда", "21 июля, четверг", "22 июля, пятница"];
      return (this.dayName = days[this.dayNumber - 1]);
    },
    howManyShow: function () {
      this.filmsNumber = this.filmsNumber / 2;
      return this.filmsNumber;
    },
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
        if (this.dayNumber === 1) {
          return filmsArray.sort(compare);
        } else {
          return filmsArray.sort(compare).slice(0, this.howManyShow());
        }
      }
      return false;
    },
  },
  components: {
    HeaderComponent,
    FilmsTable,
    WinnerFilm,
  },
};
</script>

<style scoped>
div {
  margin-top: 20px;
}
</style>
