<template>
  <div>
    <div class="main-form">
      <input type="date" class="payment-form" v-model="date" />
      <select class="payment-form" v-model="category" v-if="categoryList">
        <option v-for="(value, idx) in categoryList" :key="idx">
          {{ value }}
        </option>
      </select>
      <input
        class="payment-form"
        v-model.number="value"
        placeholder="Please select an amount"
      />
      <button class="save-button" @click="onClickSave">ADD +</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      date: "",
      category: "",
      value: 0,
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
  },
  methods: {
    onClickSave() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value,
      };
      this.$store.commit("addDataToPaymentsList", data);
    },
  },
  async created() {
    await this.$store.dispatch("fetchCategoryList");
  },
  mounted() {},
};
</script>



<style>
.main-form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-left: 20px;
}

.payment-form {
  margin-top: 10px;
  padding: 20px;
}

.save-button {
  padding: 10px;
  font-size: 20px;
  background: green;
  color: white;
  border: none;
  margin-top: 10px;
  margin-bottom: 10px;
}

.hidden {
  display: none;
}
</style>