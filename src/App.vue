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
          titleOriginal: "Code Name Banshee",
          year: 2022,
          ageRating: 18,
          genre: ["боевик", "триллер"],
          country: ["США"],
          time: 88,
          voiceOver: ["Rus", "Eng"],
          subtitles: ["Rus", "Eng"],
          slogan: "Время пришло",
          image: require("./assets/img/1.jpg"),
        },
        {
          id: 2,
          titleRus: "Девушка с татуировкой дракона",
          titleOriginal: "The Girl with the Dragon Tattoo",
          year: 2011,
          ageRating: 18,
          genre: ["детектив", "триллер", "драма", "криминал"],
          country: ["США", "Швеция", "Норвегия"],
          time: 158,
          voiceOver: ["Rus", "Eng"],
          subtitles: ["Rus", "Eng"],
          slogan: "Evil shall with evil be expelled",
          image: require("./assets/img/2.jpg"),
        },
        {
          id: 3,
          titleRus: "Девушка с татуировкой дракона",
          titleOriginal: "The Girl with the Dragon Tattoo",
          year: 2011,
          ageRating: 18,
          genre: ["детектив", "триллер", "драма", "криминал"],
          country: ["США", "Швеция", "Норвегия"],
          time: 158,
          voiceOver: ["Rus", "Eng"],
          subtitles: ["Rus", "Eng"],
          slogan: "Evil shall with evil be expelled",
          image: "",
        },
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
