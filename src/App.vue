<template>
  <div>
    <HeaderComponent v-on:dayChanged="updateDate" v-bind:dayName="dayName" v-bind:dayNumber="dayNumber" title="Что посмотреть в пятницу?" />
    <WinnerTitle v-if="dayNumber === 5"></WinnerTitle>
    <FilmsTable v-bind:films="sortedFilms"></FilmsTable>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FilmsTable from "./components/FilmsTable.vue";
import WinnerTitle from "./components/WinnerTitle.vue";

export default {
  name: "App",
  data() {
    return { films: [], dayNumber: 1, dayName: "18 июля, понедельник" }; //Первый день голосования - понедельник
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
      console.log(this.dayNumber);
      return (this.dayName = days[this.dayNumber - 1]);
    },
  },

  computed: {
    howManyShow: function () {
      switch (this.dayNumber) {
        case 1:
          return 16;
        case 2:
          return 8;
        case 3:
          return 4;
        case 4:
          return 2;
        case 5:
          return 1;
        default:
          return 16;
      }
    },
    sortedFilms: function () {
      function compare(a, b) {
        if (a.rating > b.rating) return -1;
        if (a.rating < b.rating) return 1;
        return 0;
      }
      if (this.films.length > 0) {
        let filmsArray = this.films.slice(0);
        return filmsArray.sort(compare).slice(0, this.howManyShow);
      } else return false;
    },
  },
  components: {
    HeaderComponent,
    FilmsTable,
    WinnerTitle,
  },
};
</script>

<style scoped>
div {
  margin-top: 20px;
}
</style>
