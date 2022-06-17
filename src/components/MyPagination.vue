<template>
  <div :class="[$style.wrp]">
    <div @click="onClick(cur - 1)">-</div>
    <div
      v-for="i in amount"
      :key="i"
      :class="{ [$style.active]: cur === i }"
      @click="onClick(i)"
    >
      {{ i }}
    </div>
    <div @click="onClick(cur + 1)">+</div>
  </div>
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

<style module lang="scss" scoped>
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