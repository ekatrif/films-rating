<template>
  <header class="container">
    <div class="row header-container">
      <div class="col-6">
        <h1 class="display-6">{{ title }}</h1>
      </div>
      <div class="col-4"><DateBlock v-bind:dayName="dayName"></DateBlock></div>
      <div class="col-2 header-container__button"><button type="button" class="btn btn-outline-secondary" v-on:click="changeDay" v-bind:disabled="isLastDay">Завершить</button></div>
    </div>
  </header>
</template>

<script>
import DateBlock from "./DateBlock.vue";
export default {
  name: "HeaderComponent",
  props: ["title", "dayName", "dayNumber"],
  components: {
    DateBlock,
  },
  methods: {
    changeDay: function () {
      this.$emit("dayChanged");
    },
  },
  computed: {
    isLastDay: function () {
      return this.dayNumber > 4 ? true : false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-container {
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 767px) {
  .header-container__button {
    width: auto;
    margin-left: auto;
  }
}
</style>
