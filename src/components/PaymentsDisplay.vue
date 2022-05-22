<template>
  <div class="paymentsList">
    <sorted-table :items="paymentsList">
      <thead>
        <tr>
          <th class="header">
            <sort-link item="index">Id</sort-link>
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
      <template>
        <tbody>
          <tr v-for="(item, index) in paymentsList" :key="index">
            <td>{{ index }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.value }}</td>
          </tr>
        </tbody>
      </template>
    </sorted-table>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>


<style scoped lang="scss">

</style>
