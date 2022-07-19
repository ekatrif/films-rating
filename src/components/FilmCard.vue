<template>
  <div class="film-card">
    <div class="film-card__poster">
      <img v-bind:src="image" v-bind:alt="titleRus" />
    </div>
    <div class="film-card__info info">
      <div class="info__original-title">
        {{ titleOriginal }} {{ ageRating }}+
      </div>
      <div class="info__about-title">О фильме</div>
      <div class="info__about-content about">
        <div class="about__name">Год производства</div>
        <div class="about__value">{{ year }}</div>
        <div class="about__name">Слоган</div>
        <div class="about__value">«{{ slogan }}»</div>
        <div class="about__name">Страна</div>
        <div class="about__value">
          <ul>
            <li v-for="item in country" v-bind:key="item.title">{{ item }}</li>
          </ul>
        </div>
        <div class="about__name">Жанр</div>
        <div class="about__value">
          <ul>
            <li v-for="item in genre" v-bind:key="item.title">{{ item }}</li>
          </ul>
        </div>
        <div class="about__name">Возраст</div>
        <div class="about__value">
          <span class="age">{{ ageRating }}+</span>
        </div>
        <div class="about__name">Звуковые дорожки</div>
        <div class="about__value">
          <ul>
            <li v-for="item in voiceOver" v-bind:key="item.title">
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="about__name">Субтитры</div>
        <div class="about__value">
          <ul>
            <li v-for="item in subtitles" v-bind:key="item.title">
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="about__name">Время</div>
        <div class="about__value">{{ time }} мин. {{ time | formatTime }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmCard",

  props: [
    "id",
    "titleRus",
    "titleOriginal",
    "year",
    "ageRating",
    "genre",
    "country",
    "time",
    "voiceOver",
    "subtitles",
    "slogan",
    "image",
  ],
  filters: {
    formatTime: function (timeMins) {
      if (timeMins < 60) {
        return false;
      } else {
        let hours = Math.floor(timeMins / 60);
        let mins = timeMins - hours * 60;
        return `/ ${hours} ч. ${mins} мин.`;
      }
    },
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.film-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3%;
}
.film-card__poster {
  margin-top: 3%;
  margin-bottom: 3%;
  width: 100%;
  height: auto;
}
.film-card__poster img {
  width: 100%;
  height: auto;
}
.info__original-title {
  font-size: 120%;
  font-weight: 400;
}
.info__about-title {
  margin-top: 6%;
  margin-bottom: 3%;
  font-size: 120%;
  font-weight: 500;
}
.info__about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 3%;
  font-size: 90%;
  line-height: 2;
  margin-bottom: 10%;
}
.about__name {
  color: rgba(21, 25, 29, 0.7);
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
