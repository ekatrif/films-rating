<template>
  <div class="date-container">
    <p class="lead">Сегодня 18 июля, понедельник</p>
  </div>
</template>

<script>
export default {
  name: "DateBlock",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.date-container {
  flex: 1 0 30%;
}
p {
  margin: 0;
}
</style>
