<template>
  <v-container class="d-flex justify-center">
    <v-btn color="secondary" class="rounded-xl" @click="onClick(cur - 1)"> - </v-btn>
    <v-btn
      color="primary"
      class="rounded-xl my-4"
      v-for="i in amount"
      :key="i"
      @click="onClick(i)"
    >
      {{ i }}
    </v-btn>
    <v-btn color="secondary" class="rounded-xl pt-17" @click="onClick(cur + 1)"
      >+</v-btn
    >
  </v-container>
</template>

<script>
export default {
  name: "MyPagination",
  props: {
    length: Number,
    n: Number,
    cur: Number,
  },
  computed: {
    amount() {
      return Math.ceil(this.length / this.n);
    },
  },
  methods: {
    onClick(p) {
      if (p < 1 || p > this.amount) {
        return;
      }
      this.$emit("changePage", p);
    },
  },
};
</script>

<style module lang="scss">
.wrp {
  display: flex;
  justify-content: flex-start;
  padding-left: 220px;
  & > div {
    padding: 10px;
    &.active {
      background-color: #4caf50;
      color: white;
    }
  }
}
</style>