<template>
  <div class="home">
    <div>
      <h1 class="title">My Personal Costs</h1>
    </div>
    <div class="button-wrap">
      <button class="save-button" type="button" @click="addNewCost">
        ADD NEW COST +
      </button>
    </div>
    <AddPaymentForm @addNewPayment="addPaymentData" />
    <main>
      <PaymentsDisplay :items="paymentsList" />
    </main>
     <MyButton @click="onClickSave"/>
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
      paymentsList: []
    };
  },
  methods: {
    addNewCost() {
      document.querySelector(".main-form").classList.toggle("hidden");
    },
    addPaymentData(data) {
      this.paymentsList.push(data);
    },
    fetchData() {
      return [
        {
          date: "2022-05-20",
          category: "Food",
          value: 169,
        },
        {
          date: "2022-05-20",
          category: "Transport",
          value: 360,
        },
        {
          date: "2022-05-20",
          category: "Clothes",
          value: 532,
        },
        {
          date: "2022-05-20",
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

<style>
.title {
  font-size: 40px;
  display: flex;
  justify-content: start;
  margin-left: 20px;
}

.hidden {
  display: none;
}

.button-wrap{
  display: flex;
  justify-content: start;
  margin-left: 20px;
}
</style>