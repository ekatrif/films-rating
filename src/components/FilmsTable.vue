<template>
  <div>
    <table class="table table-striped">
      <TableHead></TableHead>
      <tbody>
        <tr
          is="table-row"
          v-for="film in films"
          v-bind:key="film.id"
          v-bind:id="film.id"
          v-bind:title="film.titleRus"
        >
          {{
            film.titleRus
          }}
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TableHead from "./TableHead.vue";
import TableRow from "./TableRow.vue";

export default {
  name: "FilmsTable",
  props: ["films"],
  components: { TableHead, TableRow },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin: 20px 10px;
}
</style>
