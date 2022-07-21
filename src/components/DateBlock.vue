<template>
  <div class="date-container">
    <p class="lead">Сегодня {{ dayName }}</p>
  </div>
</template>

<script>
export default {
  name: "DateBlock",
  props: ["dayName"],
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
