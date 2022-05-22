<template>
  <div class="about">
    <header>
      <div class="title">My personal costs</div>
      <AddPaymentForm @addNewPayment="addPaymentData" />
    </header>
    <main>
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
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
import AddPaymentForm from "@/components/AddPaymentForm.vue";

export default {
  name: "AboutView",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      paymentsList: [],
    };
  },
  methods: {
    addPaymentData(data) {
      this.paymentsList.push(data);
    },
    fetchData() {
      return [
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
      ];
    },
  },
  created() {
    this.paymentsList = this.fetchData();
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 20px;
  color: green;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.header{
  text-align: left; 
  width: 10rem;
}
</style>