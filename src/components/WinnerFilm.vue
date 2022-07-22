<template>
  <div>
    <h2 class="display-5">И.. наш победитель!</h2>
    <div class="film-card">
      <div class="film-title">{{ films[0].titleRus }} ({{ films[0].year }})</div>
      <div class="film-card__poster">
        <img v-bind:src="films[0].image" v-bind:alt="films[0].titleRus" />
      </div>
      <div class="film-card__info info">
        <div class="info__original-title">{{ films[0].titleOriginal }} {{ films[0].ageRating }}+</div>
        <div class="info__about-title">О фильме</div>
        <div class="info__about-content about">
          <div class="about__name">Год производства</div>
          <div class="about__value">{{ films[0].year }}</div>
          <div class="about__name">Слоган</div>
          <div class="about__value">«{{ films[0].slogan }}»</div>
          <div class="about__name">Страна</div>
          <div class="about__value">
            <ul>
              <li v-for="item in films[0].country" v-bind:key="item.title">{{ item }}</li>
            </ul>
          </div>
          <div class="about__name">Жанр</div>
          <div class="about__value">
            <ul>
              <li v-for="item in films[0].genre" v-bind:key="item.title">{{ item }}</li>
            </ul>
          </div>
          <div class="about__name">Возраст</div>
          <div class="about__value">
            <span class="age">{{ films[0].ageRating }}+</span>
          </div>
          <div class="about__name">Звуковые дорожки</div>
          <div class="about__value">
            <ul>
              <li v-for="item in films[0].voiceOver" v-bind:key="item.title">{{ item }}</li>
            </ul>
          </div>
          <div class="about__name">Субтитры</div>
          <div class="about__value">
            <ul>
              <li v-for="item in films[0].subtitles" v-bind:key="item.title">{{ item }}</li>
            </ul>
          </div>
          <div class="about__name">Время</div>
          <div class="about__value">{{ films[0].time }} мин. {{ films[0].time | formatTime }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WinnerFilm",
  props: ["films"],
  filters: {
    formatTime: function (timeMins) {
      if (timeMins < 60) {
        return false;
      } else {
        let hours = Math.floor(timeMins / 60);
        let mins = timeMins - hours * 60;
        return `/ ${hours}ч. ${mins}мин.`;
      }
    },
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin-top: 40px;
  margin-bottom: 20px;
}

h2 {
  text-align: center;
}

.film-title {
  margin-top: 0;
  font-size: 150%;
}

.film-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3%;
  margin-bottom: 60px;
  font-size: 120%;
}
.film-card__poster {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: auto;
}
.film-card__poster img {
  width: 100%;
  height: auto;
}
.info__original-title {
  margin: 0;
  font-size: 120%;
  font-weight: 400;
}
.info__about-title {
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 120%;
  font-weight: 500;
}
.info__about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 3%;
  font-size: 90%;

  line-height: 1;
}
.about__name {
  color: rgba(21, 25, 29, 0.7);
  margin: 5px;
  padding: 5px;
}
.about__value {
  margin: 5px;
  padding: 5px;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
ul li {
  display: inline;
}
ul li:not(:last-child)::after {
  content: ", ";
}
.age {
  width: auto;
  padding: 3px;
  border: 2px solid rgba(21, 25, 29);
  border-radius: 3px;
  font-weight: 600;
}
</style>
