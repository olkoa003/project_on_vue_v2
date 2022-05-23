<template>
  <div class="home">
    <div>
      <h1 class="title">My Personal Costs</h1>
    </div>
    <MyButton class="PaymentForm__btn" :title="titleBtn" @onClickSave="addNewCost" />
    <AddPaymentForm @addNewPayment="addPaymentData" />
    <main>
      <PaymentsDisplay :items="paymentsList" />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
import AddPaymentForm from "@/components/AddPaymentForm.vue";
import MyButton from "@/components/MyButton.vue";

export default {
  name: "HomeView",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    MyButton
  },
  data() {
    return {
      paymentsList: [],
      titleBtn: 'ADD NEW COST +',
      disabled: false,
    };
  },
  methods: {
    addNewCost(){
      document.querySelector("PaymentForm__btn").classList.toggle('hidden');
      console.log(this.$emit);
    },
    addPaymentData(data) {
      this.paymentsList.push(data);
    },
    fetchData() {
      return [
        {
          date: "28.3.2022",
          category: "Food",
          value: 169,
        },
        {
          date: "24.4.2022",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.3.2022",
          category: "Clothes",
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
  font-size: 40px;
  display: flex;
  justify-content: start;
  margin-left: 20px;
}

.hidden{
  display: none;
}
</style>