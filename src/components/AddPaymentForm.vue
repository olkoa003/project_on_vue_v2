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
      <button class="save-button" @click="onClickSave">SAVE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  props: {
    values: Object
  },
  data() {
    return {
      date: "",
      category: "",
      value: ""
    }
  },
  computed: {
    getCurrentDate(){
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth()+1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    },
    categoryList(){
      return this.$store.getters.getCategoryList
    }
  },
  methods: {
    onClickSave(){
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value
      };
      if (this.action === 'Add') {
          this.addNewPayment(data);
        } else if (this.action === 'Edit') {
          data.id = this.idEdit;
          this.setEditItem(data);
        }
      this.$store.commit('addDataToPaymentsList', data)
      // console.log(data);
    }
  },
  async created() {
    await this.$store.dispatch('fetchCategoryList')
  },
  mounted() {
    if(this.values?.item) {
      
      const {category, date, value} = this.values.item
      this.value = value
      this.date = date
      this.category = category
      return 
    }
    const {category, section} = this.$route.params
    if(!category || !section) {
      return 
    }
    this.category = category
    const {value} = this.$route.query
    if(!value) return 
    this.value = value
    if(this.value && this.category) {
       this.onClickSave()
    }
  },
}
</script>


<style>
.main-form {
  display: flex;
  flex-direction: column;
  width: 300px;

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