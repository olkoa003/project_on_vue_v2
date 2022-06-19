<template>
  <v-container>
    <v-row>
      <v-col>
        <header>
          <div class="text-h5 text-sm-h3 mb-8 mt-8">My Personal Costs</div>
        </header>
        <v-btn color="teal" dark @click="openModalForm"
          >ADD NEW COST <v-icon>mdi-plus</v-icon></v-btn
        >

        <PaymentsDisplay :items="currentElements" />
        <MyPagination
          :cur="cur"
          :length="getPaymentsList.length"
          :n="n"
          @changePage="changePage"
        />
      </v-col>
      <v-col>
        <div class="text-h5 text-sm-h3 mb-8 mt-8">Diagram</div>
        <MyChart class="mt-16 ml-16"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
import MyPagination from "@/components/MyPagination.vue";
import MyChart from "../components/MyChart.vue";

export default {
  name: "HomeView",
  components: {
    PaymentsDisplay,
    MyPagination,
    MyChart,
  },
  data() {
    return {
      paymentsList: [],
      cur: 1,
      n: 10,
      dialog: false,
      dialogMenu: false,
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
    openModalForm() {
      this.$modal.show("addform", {
        title: "Add New Payment",
        component: "AddPaymentForm",
      });
    },
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