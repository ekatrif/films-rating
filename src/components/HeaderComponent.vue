<template>
  <header>
    <h1>{{ title }}</h1>
    <DateBlock></DateBlock>
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
header {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
}
h1 {
  flex: 1 0 70%;
}
</style>
