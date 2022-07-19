<template>
  <header class="container">
    <div class="row">
      <div class="col-8">
        <h1 class="display-6">{{ title }}</h1>
      </div>
      <div class="col-4"><DateBlock></DateBlock></div>
    </div>
  </header>
</template>

<script>
import DateBlock from "./DateBlock.vue";
export default {
  name: "HeaderComponent",
  props: {
    title: String,
  },
  components: {
    DateBlock,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  justify-content: space-between;
  align-items: center;
}
/* header {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
}
h1 {
  flex: 1 0 70%;
} */
</style>
