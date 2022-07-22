<template>
  <tr>
    <td>{{ currentNumber }}</td>
    <td v-on:click="showCard">
      <div class="film-title" v-bind:class="{ active: isClicked }">{{ titleRus }} ({{ year }})</div>
      <transition name="fade">
        <FilmCard
          v-bind:films="films"
          v-show="isClicked"
          v-bind:id="id"
          v-bind:titleRus="titleRus"
          v-bind:titleOriginal="titleOriginal"
          v-bind:year="year"
          v-bind:ageRating="ageRating"
          v-bind:genre="genre"
          v-bind:country="country"
          v-bind:time="time"
          v-bind:voiceOver="voiceOver"
          v-bind:subtitles="subtitles"
          v-bind:slogan="slogan"
          v-bind:image="image"
        ></FilmCard>
      </transition>
    </td>
    <td>
      <button type="button" class="btn btn-primary btn-sm" v-on:click="sendVoice">Голосую за него!</button>
    </td>
    <td>{{ rating }}</td>
  </tr>
</template>

<script>
import FilmCard from "./FilmCard.vue";
export default {
  name: "TableRow",
  props: ["films", "rating", "id", "titleRus", "titleOriginal", "year", "ageRating", "genre", "country", "time", "voiceOver", "subtitles", "slogan", "image", "currentNumber"],
  components: { FilmCard },
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
    sendVoice: function () {
      this.$root.$emit("addVoiceToFilm", this.currentNumber - 1);
    },
    showCard: function () {
      this.isClicked = this.isClicked ? false : true;
    },
  },
  mounted: function () {
    this.$emit("changeIndex");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td:nth-child(2):hover {
  cursor: pointer;
  /* background-color: #2c3034;
  color: #fff; */
}
td:nth-child(3),
td:nth-child(4) {
  text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  /* background-color: #2c3034;
  color: #fff; */
  transition: opacity 0.5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.film-title {
  font-size: 100%;
  transition: font-size 0.5s ease-out;
}
.active {
  font-size: 150%;
  transition: font-size 0.5s ease-out;
}
</style>
