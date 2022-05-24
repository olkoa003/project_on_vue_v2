<template>
  <button @click="clicked">{{ title }}</button>
</template>

<script>
export default {
  name: "MyButton",
  data() {
    return {
      title: 'SAVE COST'
    };
  },
  methods: {
    clicked() {
      this.$emit("onClickSave");
    },
  },
};
</script>

<style scoped>
</style>