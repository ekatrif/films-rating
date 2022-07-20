<template>
  <thead>
    <tr>
      <th scope="col">№</th>
      <th scope="col">Название</th>
      <th scope="col">Проголосовать</th>
      <th scope="col">Число голосов</th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: "TableHead",

  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
th:nth-child(3),
th:nth-child(4) {
  text-align: center;
}
</style>
