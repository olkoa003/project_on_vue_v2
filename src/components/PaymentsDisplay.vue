<template>
  <div>
    <h2 class="under_title">Total Amount Spent: {{ getFPV }}</h2>
    <div class="paymentsList">
      <table>
        <thead>
          <tr>
            <th class="header" item="index">ID</th>
            <th class="header" item="index">Date</th>
            <th class="header" item="index">Category</th>
            <th class="header" item="index">Value</th>
            <th class="header" item="index">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in items" :key="idx">
            <td>{{ item.id }} </td>
            <td>{{ item.date }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.value }}</td>
            <td class="cursor" @click="onContextMenuClick">...</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "PaymentsDisplay",
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
    ...mapMutations([
      'deleteElementFromPaymentList',
    ]),
    editItem(item) {
      this.$modal.show('addform', {title: "Edit Payment", component: 'AddPaymentForm', props: {item} })
      console.log('edit',item)
    },

    actionDelete(id) {
      this.deleteElementFromPaymentList(id);
      this.$contextMenu.close();
    },

    onContextMenuClick(event, item){
      const items = [
          {
            text: "Edit", action: ()=> { this.editItem(item)}
          },
          {
            text: 'Delete item', action: ()=>{ this.actionDelete(item.id)}
          }
        ]
      this.$contextMenu.show({event,items})
    }
  }
}
</script>

<style scoped>
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