<template>
  <div class="form-wrapper">
    <input class="input-form" v-model="date" placeholder="Payment Date" />
    <input class="input-form" v-model="category" placeholder="Payment Category"/>
    <input class="input-form" v-model="value" placeholder="Payment amount" />
    <div class="addNewCostButton">
      <button type="button" class="form-button" @click="onClickSave">
        Add New Cost +
      </button>
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
      value: "",
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
  },
  methods: {
    onClickSave() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value,
      };
      this.$emit("addNewPayment", data);
      console.log(data);
    },
  },
};
</script>


<style scoped lang="scss">
.input-form {
  padding: 10px;
  width: 300px;
  margin-bottom: 10px;
  margin-top: 10px;
}

//button 
.form-button {
  padding: 10px;
  font-size: 10px;
  font-weight: bold;
}

.addNewCostButton{
    background-color: green;
    border-radius: 20px;
}

.form-wrapper {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}
</style>