<template>
  <div class="container">
    <WinnerFilm v-if="dayNumber === 5" v-bind:films="films"></WinnerFilm>
    <table v-else class="table table-striped">
      <TableHead></TableHead>
      <tbody>
        <tr
          is="table-row"
          v-for="film in films"
          v-bind:films="films"
          v-bind:key="film.id"
          v-bind:id="film.id"
          v-bind:titleRus="film.titleRus"
          v-bind:titleOriginal="film.titleOriginal"
          v-bind:year="film.year"
          v-bind:ageRating="film.ageRating"
          v-bind:genre="film.genre"
          v-bind:country="film.country"
          v-bind:time="film.time"
          v-bind:voiceOver="film.voiceOver"
          v-bind:subtitles="film.subtitles"
          v-bind:slogan="film.slogan"
          v-bind:image="film.image"
          v-bind:rating="film.rating"
          v-bind:currentNumber="films.indexOf(film) + 1"
        ></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TableHead from "./TableHead.vue";
import TableRow from "./TableRow.vue";
import WinnerFilm from "./WinnerFilm.vue";

export default {
  name: "FilmsTable",
  props: ["films", "dayNumber"],
  components: { TableHead, TableRow, WinnerFilm },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-top: 20px;
}
</style>
