<template>
  <div class="home">
    <div>
      <h1 class="title">My Personal Costs</h1>
    </div>
    <div class="button-wrap">
      <!-- <button class="save-button" type="button" @click="addNewCost">
        ADD NEW COST +
      </button> -->
      <button class="save-button" @click="openModalForm">Show Form</button>
    </div>
    <!-- <AddPaymentForm @addNewPayment="addPaymentData" /> -->
    <main>
      <PaymentsDisplay :items="currentElements" />
      <MyPagination
        :cur="cur"
        :length="getPaymentsList.length"
        :n="n"
        @changePage="changePage"
      />
    </main>
    <MyButton />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
import MyButton from "@/components/MyButton.vue";
import MyPagination from "@/components/MyPagination.vue";

export default {
  name: "HomeView",
  components: {
    PaymentsDisplay,
    MyButton,
    MyPagination,
  },
  data() {
    return {
      paymentsList: [],
      cur: 1,
      n: 10,
    };
  },
  computed: {
    ...mapGetters(["getFullPaymentValue", "getPaymentsList"]),
    currentElements() {
      return this.getPaymentsList.slice(
        this.n * (this.cur - 1),
        this.n * (this.cur - 1) + this.n
      );
    },
  },
  methods: {
    ...mapMutations({
      MyMutation: "setPaymentsListData",
    }),
    addNewCost() {
      document.querySelector(".main-form").classList.toggle("hidden");
    },
    changePage(p) {
      this.cur = p;
    },
    addPaymentData(data) {
      this.paymentsList.push(data);
    },
    openModalForm(){
      this.$modal.show('addform', {title: "Add New Payment", component: 'AddPaymentForm'})
    }
  },
  created() {
    // this.paymentsList = this.fetchData();
    this.$store.dispatch("fetchData");
    // this.$store.commit('setPaymentsListData', this.fetchData())
  },
  mounted() {
    if (!this.$route.params?.page || isNaN(this.$route.params.page)) return;
    this.cur = Number(this.$route.params.page);
  },
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

.button-wrap {
  display: flex;
  justify-content: start;
  margin-left: 20px;
}

.under_title {
  justify-content: start;
  margin-left: 20px;
  font-size: 20px;
  display: flex;
  color: red;
}

</style>