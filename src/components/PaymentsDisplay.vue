<template>
  <div class="paymentsList">
    <table>
      <thead>
        <tr>
          <th class="header">
            <sort-link item="index">ID</sort-link>
          </th>
          <th class="header">
            <sort-link item="date">Date</sort-link>
          </th>
          <th class="header">
            <sort-link item="category">Category</sort-link>
          </th>
          <th class="header">
            <sort-link item="value">Value</sort-link>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ index }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => []
    },
  },
};
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 650px;
  margin-left: 20px;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

.title {
  display: flex;
  justify-content: start;
  font-weight: bold;
  margin-left: 20px;
}
</style>