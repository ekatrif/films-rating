<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ title }}</td>
    <td>Тут будет кнопка</td>
  </tr>
</template>

<script>
export default {
  name: "TableRow",
  props: ["id", "title"],
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
