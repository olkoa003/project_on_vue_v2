<template>
  <v-container>
    <div class="total mb-5">Total Amount Spent: {{ getFPV }}</div>
    <v-row class="elevation-1">
      <v-col :cols="3" class="font-weight-bold">#</v-col>
      <v-col :cols="3" class="font-weight-bold">Date</v-col>
      <v-col :cols="2" class="font-weight-bold">Category</v-col>
      <v-col :cols="2" class="font-weight-bold">Value</v-col>
      <v-col :cols="2" class="font-weight-bold">Action</v-col>
    </v-row>
    <v-row v-for="item in items" :key="item.id" class="elevation-1">
      <v-col :cols="3">{{ item.id }}</v-col>
      <v-col :cols="3">{{ item.date }}</v-col>
      <v-col :cols="2">{{ item.category }}</v-col>
      <v-col :cols="2">{{ item.value }}</v-col>
      <v-col :cols="2" @click="onContextMenuClick($event, item)">...</v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "PaymentsDisplay",
  data() {
    return {
    };
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    getFPV() {
      return this.$store.getters.getFullPaymentValue;
    },
  },
  methods: {
    ...mapMutations(["deleteElementFromPaymentList", "editDataToPaymentList"]),

    editItem(item) {
      this.$modal.show("addform", {
        title: "Edit Payment Details",
        component: "AddPaymentForm",
        props: {
          item,
        },
      });
    },

    actionDelete(id) {
      this.$store.commit("deleteElementFromPaymentList", id);
    },

    closeMenu(data) {
      this.dialogMenu = data;
    },

    onContextMenuClick(event, item) {
      const items = [
        {
          text: "Edit",
          action: () => {
            this.editItem(item);
          },
        },
        {
          text: "Delete item",
          action: () => {
            this.actionDelete(item.id);
          },
        },
      ];
      this.$contextMenu.show({ event, items });
    },
  },
};
</script>

<style lang="scss">
.cursor {
  cursor: pointer;
}

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