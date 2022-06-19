<template>
  <v-card class="pa-8">
    <v-text-field :rules="[() => !!date || 'This field is required']" v-model="date" type="date" label="Date" />
    <v-select v-model="category" :items="categoryList" :rules="[() => !!category || 'This field is required']"  label="Categories" />
    <v-text-field v-model="value"  :rules="[() => !!value || 'This field is required']"  label="Value" />
    <v-btn color="teal" dark @click.prevent="onClickSave" @click="onCloseClick">
      SAVE
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: "AddPaymentForm",
  props: {
    values: Object
  },
  data() {
    return {
      editMode: false,
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
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
  },
  methods: {
    onClickSave() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: +this.value,
        id:
          this.id ||
          Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
      };
      if (this.editMode) {
        this.$store.commit("editDataToPaymentList", data);
        this.editMode = false;
      } else {
        this.$store.commit("addDataToPaymentsList", data);
      }
      this.date = "";
      this.category = "";
      this.value = "";
    },
    onCloseClick() {
      this.$modal.hide();
    },
  },

  async created() {
    await this.$store.dispatch("fetchCategoryList");
  },
  mounted() {
    if (this.values?.item) {
      const { category, date, value, id } = this.values.item;
      this.value = value;
      this.date = date;
      this.category = category;
      this.id = id;
      this.editMode = true;
      return;
    }
    const { category, section } = this.$route.params;
    if (!category || !section) return;
    this.category = category;
    const { value } = this.$route.query;
    if (!value) return;
    this.value = value;
    if (this.value && this.category) {
      this.onClickSave();
    }
  },
};
</script>

<style lang="scss">
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