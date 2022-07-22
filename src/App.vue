<template>
  <div>
    <HeaderComponent
      v-on:dayChanged="
        updateDate();
        sortFilms();
      "
      v-bind:dayName="dayName"
      v-bind:dayNumber="dayNumber"
      title="Что посмотреть в пятницу?"
    />
    <FilmsTable v-bind:dayNumber="dayNumber" v-bind:films="selectedFilms"></FilmsTable>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FilmsTable from "./components/FilmsTable.vue";

export default {
  name: "App",
  data() {
    return { films: [], dayNumber: 1, dayName: "18 июля, понедельник", selectedFilms: [] };
  },
  async created() {
    try {
      const response = await this.axios.get("films.json");
      this.films = response.data.films;
      this.selectedFilms = this.films;
    } catch (err) {
      console.log("Ошибка", err);
    }
  },
  //Прослушиваем глобально событие из вложенного компонента
  mounted: function () {
    //Обновляем число голосов за фильм
    this.$root.$on("addVoiceToFilm", (data) => {
      this.selectedFilms[data].rating += 1;
      //Отсортируем массив
      function compare(a, b) {
        if (a.rating > b.rating) return -1;
        if (a.rating < b.rating) return 1;
        return 0;
      }
      setTimeout(() => {
        this.selectedFilms.sort(compare);
      }, 1000);
    });
  },

  methods: {
    //Обновляем дату и день недели
    updateDate: function () {
      this.dayNumber++;
      const days = ["18 июля, понедельник", "19 июля, вторник", "20 июля, среда", "21 июля, четверг", "22 июля, пятница"];
      return (this.dayName = days[this.dayNumber - 1]);
    },
    howManyShow: function () {
      this.selectedFilms.length = this.selectedFilms.length / 2;
      return this.selectedFilms.length;
    },
    sortFilms: function () {
      function compare(a, b) {
        if (a.rating > b.rating) return -1;
        if (a.rating < b.rating) return 1;
        return 0;
      }
      if (this.selectedFilms.length > 0) {
        this.selectedFilms = this.selectedFilms.sort(compare).slice(0, this.howManyShow());
        return this.selectedFilms;
      }
      return false;
    },
  },

  components: {
    HeaderComponent,
    FilmsTable,
  },
};
</script>

<style scoped>
div {
  margin-top: 20px;
}
</style>
