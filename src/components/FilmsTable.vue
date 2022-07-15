<template>
  <div class="table-container">
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonVote: "<b-button variant='outline-primary'>Хочу этот!</b-button>",
      fields: ["№", "Название", "Проголосовать"],
      items: [
        {
          number: 1,
          title: "Месть Банши (2022)",
          button: "",
        },
        {
          number: 1,
          title: "Месть Банши (2022)",
          button: "",
        },
        {
          number: 1,
          title: "Месть Банши (2022)",
          button: "",
        },
        {
          number: 1,
          title: "Месть Банши (2022)",
          button: "",
        },
        {
          number: 1,
          title: "Месть Банши (2022)",
          button: "",
        },
        {
          number: 1,
          title: "Месть Банши (2022)",
          button: "",
        },
        {
          number: 1,
          title: "Месть Банши (2022)",
          button: "",
        },
        {
          number: 1,
          title: "Месть Банши (2022)",
          button: "",
        },
      ],
    };
  },
};
</script>
<style scoped>
.table-container {
  margin: 20px 10px;
}
</style>
